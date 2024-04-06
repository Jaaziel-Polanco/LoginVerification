import React from 'react';
import { Form, Input, notification } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import appFirebase from '../../credenciales';
import imgOut from '../../assets/userLogOut.png';

const auth = getAuth(appFirebase);

const Registro = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const { email, password, nombre, apellido } = values;
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: `${nombre} ${apellido}`,
            });

            notification.success({
                message: 'Registro exitoso',
                description: 'La cuenta ha sido creada con éxito. Ya puedes iniciar sesión.',
            });

            navigate('/');
        } catch (error) {
            notification.error({
                message: 'Error en el registro',
                description: error.message,
            });
        }
    };

    return (
        <div className='flex items-center justify-center h-screen bg-bgSecondary'>
            <Form
                form={form}
                name="registro"
                onFinish={onFinish}
                className="w-96 rounded-2xl bg-slate-800 shadow-2xl p-8 flex flex-col gap-3 animate-fade-right animate-once animate-ease-in"
                layout="vertical"
            >
                <div className='flex justify-center'>
                    <img src={imgOut} alt="user Logo" />
                </div>

                <p className="text-center text-3xl text-gray-300 mb-4">Registro</p>
                <Form.Item
                    name="nombre"
                    rules={[{ required: true, message: "Por favor introduce tu nombre!" }]}
                >
                    <Input placeholder="Nombre" />
                </Form.Item>

                <Form.Item
                    name="apellido"
                    rules={[{ required: true, message: "Por favor introduce tu apellido!" }]}
                >
                    <Input placeholder="Apellido" />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: "email",
                            required: true,
                            message: "Por favor introduce un correo electrónico válido!",
                        },
                    ]}
                >
                    <Input placeholder="Correo Electrónico" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Por favor introduce tu contraseña!",
                        },
                        {
                            min: 6,
                            message: "La contraseña debe tener al menos 6 caracteres",
                        },
                    ]}
                >
                    <Input.Password placeholder="Contraseña" />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: "Por favor confirma tu contraseña!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Las contraseñas no coinciden'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Confirmar Contraseña" />
                </Form.Item>

                <Form.Item>
                    <button block="true" type='submit' className="bg-accent-100 text-primary-100 hover:bg-[#D1C4E9] transition-all font-extrabold w-full rounded-xl py-1">
                        Registrarse
                    </button>
                </Form.Item>
                <Form.Item>
                    <div className="text-white text-center w-full mb-5">
                        Ya tienes una cuenta?{" "}
                        <p className="animate-bounce animate-infinite animate-ease-in-out">
                            <Link to={"/"} className="text-accent-100 font-extrabold hover:text-[#D1C4E9]">
                                Iniciar sesión
                            </Link> </p>
                    </div>
                </Form.Item>
            </Form>
        </div >
    );
};

export default Registro;

