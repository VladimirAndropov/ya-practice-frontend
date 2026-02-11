import { useState } from "react";
import "./styles.css";
import { fakeUsers } from "../data";
import { TErrorMessageProps, TUser } from "../types";

const ErrorMessage = ({ error }: TErrorMessageProps) => {
  return (
    <div className="error">
      <p className="warning">Что-то пошло не так!</p>
      <p>
        <span>Ошибка:</span> {error.message}
      </p>
    </div>
  );
};

export const App = () => {
  const [users] = useState<Array<TUser>>(fakeUsers);

  return (
    <div>
      <h1>Список пользователей:</h1>
      {/* Здесь должен быть ErrorBoundary */}
      <ul className="users">
        {users.map((user) => (
          <div className="user" key={user.id}>
            <p>
              <span>Имя:</span> {user.name}
            </p>
            <p>
              <span>Email:</span> {user.email}
            </p>
          </div>
        ))}
      </ul>
      {/* Здесь должен быть ErrorBoundary */}
    </div>
  );
};