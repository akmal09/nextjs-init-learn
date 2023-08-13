import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./Login.module.scss"

const LoginView = ()=>{
    const { push } = useRouter()
    const HandlerLogin = ()=>{
        push("/products")
    }
    return(
        <div className={styles.login}>
            <div>Login Page</div>
            <button onClick={()=>{HandlerLogin()}}>Login</button>
            <Link href={"/auth/register"}>Belum Punya Akun</Link>
        </div>
    )
}

export default LoginView