import { useState } from "react";
import { useFormik } from "formik";
import Helmet from "react-helmet";
import Button from "../components/Button";


const ProfileForm = ({bio, profilePic, action, userType}) => {

    const [values, setValues] = useState({ bio: bio || '', profilePic: profilePic })
    
    const formik = useFormik({
        initialValues: {
            profilePic: '',
            bio: ''
        },
        onSubmit:(values) => {
            console.log(values)
            action({
                variables: {
                    ...values
                }
            })
        },
        onChange: event => {
            setValues({
                ...values,
                [event.target.name]: event.target.value
            })
        }
    })
    return (
      <main>
        <Helmet>
          <meta charSet="utf-8" />
        </Helmet>
        <form onSubmit={formik.handleSubmit}>
          <section>
            <label htmlFor="avatar">Avatar</label>
            <input
              type="file"
              id="avatar"
              name="profilePic"
              accept="image/png, image/jpeg, image/jpg"
              capture="user"
              className=""
              value={formik.values.profilePic}
              onChange={formik.handleChange}
            />
          </section>
          <section>
            <label htmlFor="bio">Bio</label>
                    <textarea required cols="10" rows="20" value={formik.values.bio} onChange={formik.handleChange} />
                </section>
                <Button isPrimary={true} btnname={userType === 'user'? 'create profile' : 'next'} />
        </form>
      </main>
    );
}

export default ProfileForm