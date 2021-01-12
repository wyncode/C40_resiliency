import React, { useContext, useState } from 'react';
import { Grid, Image, Button } from 'react-bootstrap';
import wyncode from '../assets/img/tim_80x80.png';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import Sidebar from '../components/Sidebar/Sidebar';
import routes from '../routes';

const NGOProfile = ({ history: { push } }) => {
  const { currentUser, setCurrentUser, setLoading } = useContext(AppContext);

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append('avatar', image, image.name);

    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setCurrentUser({ ...currentUser, avatar: updatedUser.data.secureURL });
      swal('Sweet!', 'Your image has been updated!', 'success');
    } catch (error) {
      swal('Oops', 'Something went wrong.');
    }
  };

  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleDelete = async (e) => {
    setLoading(true);
    try {
      const willDelete = await swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this account!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      });
      if (willDelete) {
        try {
          await axios({
            method: 'DELETE',
            url: '/api/users',
            withCredentials: true
          });
          swal('Poof!', 'Your account has been deleted.', { icon: 'success' });
          setLoading(false);
          sessionStorage.removeItem('user');
          setCurrentUser(null);
          push('/login');
        } catch (error) {
          swal('Oops!', 'Something went wrong.');
        }
      } else {
        swal('Your account is safe!');
      }
    } catch (error) {
      swal('Oops!', 'Something went wrong.');
    }
  };

  return (
    <>
      <Sidebar routes={routes} />
      <div className="content">
        <Grid className="d-flex justify-content-center align-items-center flex-column">
          <h1 className="mt-4">Your Profile</h1>
          <div className="mt-4">
            <Image
              src={
                preview
                  ? preview
                  : currentUser?.avatar
                  ? currentUser.avatar
                  : wyncode
              }
              alt="profile-picture"
              width={250}
              height={250}
              roundedCircle
            />
          </div>
          <div className="mt-4">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
              />
              <Button type="submit" size="sm" className="mt-4">
                Save Image
              </Button>
            </form>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center mt-4">
            <div className="d-flex ">
              <label htmlFor="name" className="pr-4 font-weight-bold">
                Name:
              </label>
              <p>{currentUser?.name}</p>
            </div>
            <div className="d-flex">
              <label htmlFor="email" className="pr-4 font-weight-bold">
                Email:
              </label>
              <p>{currentUser?.email}</p>
            </div>
            <Button variant="danger" onClick={handleDelete}>
              Delete Account
            </Button>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default NGOProfile;
