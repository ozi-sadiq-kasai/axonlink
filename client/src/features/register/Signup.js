import Orb from "../../components/Orb"
import { Main,FormWrapper,Card,Divider,Button,FormLayout } from "./styleSignup"

const Register = () => {


  return (
   <>
     <Orb />
   <Main>
   <h1>Sign up</h1>
    <FormLayout>
      <Card>
      <FormWrapper>
              <div className="input-container">
                <input 
                  type="text"
                  placeholder=" " // Empty placeholder for label animation
                  required
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="input-container">
                <input 
                  type="email"
                  placeholder=" " // Empty placeholder for label animation
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-container">
                <input 
                  type="password"
                  id="password"
                  placeholder=" " // Empty placeholder for label animation
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <button type="submit">
                Login
              </button>
            </FormWrapper>
      </Card>
     <Divider>or</Divider>
     <Button>
      <a href="#">Login With Google</a>
     </Button>
    </FormLayout>
     <a href="/login">Already have an account?Login</a>
   </Main>
   </>
  )
}
export default Register