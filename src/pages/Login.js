import React from 'react'
import seff_logo_black from "../media/seff_logo_black.jpg"
import userImg from "../media/user-img.png"
import LockImg from "../media/lock-img.png"
import showPasswordImg from "../media/show-password-white.png"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div class="login" >
      <div class=" login-form">
        <img class="login-logo" src={seff_logo_black} alt="seff_logo" />
        <form action="">
          <div class="input-con">
            <img class="login-icon login-user" src={userImg} alt="" />
            <input type="number" placeholder="USER ID" name="" id="" />
          </div>
          <div class="input-con">
            <img class="login-icon login-lock" src={LockImg} alt="" />
            <input type="password" placeholder="PASSWORD" name="" id="" />
            <img src={showPasswordImg} class="password-icon" alt="" />
          </div>
          <Link to="/">
          <input type="submit" value="LOGIN" />
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login