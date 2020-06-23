import React from "react";
import moment from "moment";

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="notifications-wrapper">
      <div className="notifications">
        <span className="notifications__title">Notifications</span>
        <ul className="notifications__content">
          {notifications &&
            notifications.map((item) => {
              const trans = notifications.findIndex((index) => index === item);
              if (trans % 2 !== 0) {
                return (
                  <li key={item.id} className="notif notif__pushleft">
                    <span className="notif__alert">{item.content}</span>
                    <div className="notif__timestamp">
                      {moment(item.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={item.id} className="notif notif__pushright">
                    <span className="notif__alert">{item.content}</span>
                    <div className="notif__timestamp">
                      {moment(item.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              }
            })}
        </ul>
        <div className="notifications__decoration">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
