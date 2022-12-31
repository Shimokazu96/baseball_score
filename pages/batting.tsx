import type { NextPageWithLayout } from 'next';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Grid, Card, CardContent, Divider, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Layout } from '@/components/layouts/Layout';

const BattingRecordPage: NextPageWithLayout = () => {
    const [PlateAppearance, setPlateAppearance] = useState(1);
    const [ThisPlateAppearance, setThisPlateAppearance] = useState('');
    const [BattingRecord, setBattingRecord] = useState<string[]>([]);
    const NextPlateAppearance = () => {
        setBattingRecord([...BattingRecord, ThisPlateAppearance]);
        setPlateAppearance(PlateAppearance + 1);
        setThisPlateAppearance('');
    };
    const hit = () => {
        setThisPlateAppearance('ヒット');
    };
    const out = () => {
        setThisPlateAppearance('アウト');
    };
    console.log(BattingRecord);

    return (
        <>
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
                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        paragraph>
                        {ThisPlateAppearance}
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
                </Container>
            </Box>
            {BattingRecord.map((recode, index) => (
                <Box key={index}>
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
                            {index + 1 + '打席目'}
                        </Box>
                        <Box
                            sx={{
                                width: '120px',
                                textAlign: 'center',
                            }}>
                            {recode}
                        </Box>
                    </Grid>
                    {/* {BattingRecord.length ? <Divider /> : <></>} */}
                </Box>
            ))}
        </>
    );
};

BattingRecordPage.getLayout = page => (
    <Layout title={'打撃成績'} link={''}>
        {page}
    </Layout>
);

export default BattingRecordPage;
