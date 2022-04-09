import React from 'react'
import classes from "./Message.module.css"


export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            <span className={classes.avatar}>
                <img src={props.avatar}/>
            </span>
            <div className={classes.triangle}></div>
            <span>
                <div className={classes.messageInner}>
                  <div className={classes.name}>{props.name}</div>
                  <div className={classes.current_message}>
                      {props.message}
                      <div className={classes.time}>{props.time}</div>
                  </div>

                </div>
            </span>
        </div>
    )
}

export default Message
