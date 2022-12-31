import type { NextPage } from 'next';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import axios from 'axios';

const Home: NextPage = () => {
    const insertUser = async () => {
        await axios.post('/api/user');
    };
    const updateUser = async () => {
        await axios.patch('/api/user');
    };
    const getUser = async () => {
        await axios.get('/api/user');
    };
    const deleteUser = async () => {
        await axios.delete('/api/user');
    };

    return (
        <Container maxWidth="sm">
            <Button variant="contained" onClick={() => insertUser()}>
                Insert User
            </Button>
            <Button variant="contained" onClick={() => updateUser()}>
                Update User
            </Button>
            <Button variant="contained" onClick={() => getUser()}>
                Get User
            </Button>
            <Button variant="contained" onClick={() => deleteUser()}>
                Delete User
            </Button>
        </Container>
    );
};

export default Home;
