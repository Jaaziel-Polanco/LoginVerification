import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import appFirebase from '../../credenciales';
import { Input, Button, Form, notification } from 'antd';
import { Link } from 'react-router-dom';

const auth = getAuth(appFirebase);

const Recovery = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        sendPasswordResetEmail(auth, values.email)
            .then(() => {
                notification.success({
                    message: 'Correo de recuperación enviado',
                    description: 'Revisa tu correo electrónico para las instrucciones de recuperación.',
                });
                form.resetFields();
            })
            .catch((error) => {
                notification.error({
                    message: 'Error al enviar correo de recuperación',
                    description: error.message,
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-bgTertiary">
            <div className="bg-white px-10 w-80 py-20 rounded-lg shadow-lg animate-flip-down animate-once animate-ease-in-out">
                <Form
                    form={form}
                    name="recover_form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico', type: 'email' }]}
                    >
                        <Input placeholder="Correo electrónico" className='h-10' />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} className="w-full">
                            Recuperar contraseña
                        </Button>
                    </Form.Item>
                    <Link to={'/'} className='text-center'>
                        <p>← Volver</p>
                    </Link>
                </Form>
            </div>
        </div>
    );
};

export default Recovery;
