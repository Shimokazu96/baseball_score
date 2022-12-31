import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import {
    Box,
    Grid,
    Card,
    CardContent,
    Divider,
    Button,
    Chip,
    Alert,
} from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Home: NextPage = () => {
    const [PlateAppearance, setPlateAppearance] = useState(1);
    const [BattingRecord, setBattingRecord] = useState<string[]>([]);
    const NextPlateAppearance = () => {
        setPlateAppearance(PlateAppearance + 1);
    };
    const hit = () => {
        setBattingRecord([...BattingRecord, 'ヒット']);
    };
    const out = () => {
        setBattingRecord([...BattingRecord, 'アウト']);
    };
    console.log(BattingRecord)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Album layout
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}>
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom>
                            打撃成績を入力する
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="text.secondary"
                            paragraph>
                            {PlateAppearance}打席目
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center">
                            <Button variant="contained" onClick={() => out()}>
                                アウト
                            </Button>
                            <Button variant="outlined" onClick={() => hit()}>
                                ヒット
                            </Button>
                            <Button variant="outlined">その他</Button>
                        </Stack>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center">
                            <Button
                                variant="outlined"
                                onClick={() => NextPlateAppearance()}>
                                決定する
                            </Button>
                        </Stack>
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom>
                            {BattingRecord}
                        </Typography>
                    </Container>
                </Box>
                {BattingRecord.length ? (
                    BattingRecord.map((recode, index) => {
                        <Card>
                            <CardContent>
                                <Grid
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    item>
                                    <Box
                                        color="text.secondary"
                                        sx={{
                                            width: '120px',
                                            textAlign: 'center',
                                        }}>
                                        {index + '打席目'}
                                    </Box>
                                    <Box
                                        sx={{
                                            width: '120px',
                                            textAlign: 'center',
                                        }}>
                                        {recode}
                                    </Box>
                                </Grid>
                                <Divider />
                            </CardContent>
                        </Card>;
                    })
                ) : (
                    <Box
                        sx={{
                            mt: { xs: '95px', md: '150px' },
                            textAlign: 'center',
                        }}>
                        公開されてるタスクはありません。
                    </Box>
                )}
            </main>
        </ThemeProvider>
    );
};

export default Home;
