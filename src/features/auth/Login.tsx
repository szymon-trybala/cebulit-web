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
import { setUser } from "../../core/store/slices/auth/authSlice";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { alert } from "../../common/alerts/alerts";
import { LoginDto } from "../../core/api/auth/models";
import { authService } from "../../core/api/auth/authService";
import { routes } from "../../router/routes";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm<LoginDto>();
  const history = useHistory();

  const submitButtonLayout = {
    wrapperCol: {
      offset: 11,
    },
  };

  const onSubmit = (data: LoginDto) => {
    authService
      .login(data)
      .then((user) => {
        dispatch(
          setUser({
            user: user,
          })
        );
        localStorage.setItem("token", user.token);
        alert.success(`Zalogowano się. Witaj, ${user.login}`);
        history.push(routes.list);
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
                  message: "Login musi mieć co najmniej 6 znaków",
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
                  Zaloguj
                </Button>
              )}
            </Form.Item>
          </Form>
          <AuthRegisterInfo>
            Jeśli nie masz konta,{" "}
            <Link to={routes.register}>zarejestruj się</Link>
          </AuthRegisterInfo>
        </AuthContent>
      </AuthContainer>
      <AuthFooter>Cebulit ©2021 Szymon Trybała</AuthFooter>
    </AuthLayout>
  );
};

export default Login;
