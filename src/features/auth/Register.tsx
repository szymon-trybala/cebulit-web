import { Button, Form, Input } from "antd";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  AuthContainer,
  AuthContent,
  AuthFooter,
  AuthLayout,
  AuthRegisterInfo,
} from "./styles";
import { useHistory } from "react-router";
import { alert } from "../../common/alerts/alerts";
import { useDispatch } from "react-redux";
import { clearUser } from "../../core/store/slices/auth/authSlice";
import { RegisterDto } from "../../core/api/auth/models";
import { authService } from "../../core/api/auth/authService";
import { routes } from "../../router/routes";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [form] = Form.useForm<RegisterDto>();
  const history = useHistory();
  const dispatch = useDispatch();

  const submitButtonLayout = {
    wrapperCol: {
      offset: 11,
    },
  };

  const onSubmit = (data: RegisterDto) => {
    authService
      .register(data)
      .then((user) => {
        dispatch(clearUser());
        alert.success(`Zarejestrowano, teraz mozesz się zalogować`);
        history.push(routes.login);
      })
      .catch((err) => {
        alert.error(`${err}`);
      });
  };

  return (
    <AuthLayout>
      <AuthContainer>
        <AuthContent>
          <Form
            form={form}
            onFinish={onSubmit}
            size="large"
            style={{ backgroundColor: "white" }}
          >
            <Form.Item
              label="Login"
              name="login"
              rules={[
                {
                  required: true,
                  message: "Musisz uzupełnić to pole",
                },
                {
                  min: 6,
                  message: "Login musi mieć co najmniej 4 znaki",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              label="Hasło"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Musisz uzupełnić to pole",
                },
                {
                  min: 6,
                  message: "Hasło musi mieć co najmniej 6 znaków",
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item shouldUpdate {...submitButtonLayout}>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    !!form
                      .getFieldsError()
                      .filter(({ errors }) => errors.length).length
                  }
                >
                  Zarejestruj się
                </Button>
              )}
            </Form.Item>
          </Form>
          <AuthRegisterInfo>
            Masz już konto? <Link to={routes.login}>Zaloguj się</Link>
          </AuthRegisterInfo>
        </AuthContent>
      </AuthContainer>
      <AuthFooter>Cebulit ©2021 Szymon Trybała</AuthFooter>
    </AuthLayout>
  );
};

export default Register;
