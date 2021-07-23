import { Button, Form, Input } from "antd";
import React from "react";
import { userService } from "../../core/api/auth/userService";
import { PasswordChangeParams } from "../../core/api/auth/models";
import { alert } from "../../common/alerts/alerts";

const ChangePassword: React.FC = () => {
  const [form] = Form.useForm<PasswordChangeParams>();

  const submitButtonLayout = {
    wrapperCol: {
      offset: 11,
    },
  };

  const submit = async (data: PasswordChangeParams) => {
    try {
      await userService.changePassword(data);
      alert.success(`Zmieniono hasło`);
    } catch (error) {
      alert.error(`${error}`);
    }
  };

  return (
    <Form form={form} onFinish={submit} size="large">
      <Form.Item
        name="currentPassword"
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
        <Input.Password placeholder="Obecne hasło" />
      </Form.Item>
      <Form.Item
        name="newPassword"
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
        <Input.Password placeholder="Nowe hasło" />
      </Form.Item>
      <Form.Item shouldUpdate {...submitButtonLayout}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Zaloguj
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default ChangePassword;
