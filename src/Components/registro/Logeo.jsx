import React, { useState } from 'react'
import { Checkbox, Form, Grid, Input, theme, notification } from "antd";
import userImg from "../../assets/user.png"

import appFirebase from '../../credenciales'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom';
const auth = getAuth(appFirebase)


const { useToken } = theme;
const { useBreakpoint } = Grid;

const Logeo = () => {

    const [registrando, setRegistrando] = useState(false)


    const { token } = useToken();
    const screens = useBreakpoint();

    const onFinish = async (values) => {
        console.log("Received values of form: ", values);

        if (!registrando) {
            try {
                await signInWithEmailAndPassword(auth, values.email, values.password)
            }
            catch (error) {
                notification.error({
                    message: 'Usuario o Contraseña incorrectos',
                    description: "Por favor verifica tus datos",
                });
            }
            await signInWithEmailAndPassword(auth, values.email, values.password)
        }

    };

    const styles = {
        container: {
            backgroundColor: "transparent",
            borderRadius: "7%",
            margin: "0 auto",
            padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
            width: "380px",
            boxShadow: "0px 20px 30px 20px rgba(0,0,0,0.1)"
        },
        header: {
            marginBottom: token.marginXL,
            textAlign: "center"
        },
        section: {
            alignItems: "center",
            background: "linear-gradient(to right, #512DA8, #673AB7, #607D8B)",
            display: "flex",
            height: screens.sm ? "100vh" : "auto",
            padding: screens.md ? `${token.sizeXXL}px 0px` : "0px"
        },
        title: {
            fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.container} className='animate-fade-down animate-once animate-ease-in'>
                <div style={styles.header}>
                    <div className='flex justify-center mb-2'>
                        <img src={userImg} alt="user Logo" />
                    </div>
                    <h1 className="text-primary-100 font-semibold text-3xl mb-5 uppercase">Iniciar Sesión </h1>
                    <p className="text-white font-semibold ">
                        Bienvenido!! Favor de ingresar tus datos para poder
                        iniciar sesión.
                    </p>
                </div>
                <Form
                    name="normal_login"
                    initialValues={{
                        remember: false,
                    }}
                    onFinish={onFinish}
                    layout="vertical"
                    requiredMark="optional">

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: "email",
                                required: true,
                                message: "Por favor introduce tu email!",
                            },
                        ]}
                    >
                        <Input
                            id='email'
                            className="focus:border-none hover:border-none"
                            placeholder="Email"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Por favor introduce tu contraseña!",
                            },
                        ]}
                    >
                        <Input.Password
                            id='password'
                            className="focus:border-none hover:border-none"
                            type="password"
                            placeholder="Contraseña"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Recuérdame</Checkbox>
                        </Form.Item>
                        <Link to={'/recovery'} className="float-right">
                            Olvidaste tu contraseña?
                        </Link>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: "0px" }}>
                        <button block="true" type='submit' className="bg-accent-100 text-primary-100 hover:bg-[#D1C4E9] transition-all font-extrabold w-full rounded-xl py-1">
                            Acceder
                        </button>
                        <div>
                            <div className="text-white text-center w-full mt-5">
                                Aún no tienes tu cuenta?{" "}
                                <p className="animate-bounce animate-infinite animate-ease-in-out">
                                    <Link to={"/registro"} className="text-accent-100 font-extrabold hover:text-[#D1C4E9]">
                                        Registrate
                                    </Link></p>
                            </div>

                        </div>
                    </Form.Item>
                </Form>

            </div>
        </section>
    )
}

export default Logeo
