import type { NextPageWithLayout } from 'next';
import { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Divider, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Layout } from '@/components/layouts/Layout';
import axios from 'axios';

const BattingRecordPage: NextPageWithLayout = () => {
    const [InputStatus, setInputStatus] = useState('init');
    const [PlateAppearance, setPlateAppearance] = useState(1);
    const [ThisPlateAppearance, setThisPlateAppearance] = useState('');
    const [BattingRecord, setBattingRecord] = useState<string[]>([]);

    const insertBattingRecord = async () => {
        await axios
            .post('/api/batting', {
                batting_record: BattingRecord,
            })
            .then(res => {
                console.log(res);
            });
    };

    const hit = () => {
        setInputStatus('hit');
    };
    const other = () => {
        setInputStatus('other');
    };
    const confirm = () => {
        setInputStatus('confirm');
    };
    const init = () => {
        setThisPlateAppearance('');
        setInputStatus('init');
    };
    const hitDetail = (number: Number) => {
        if (number === 1) {
            setThisPlateAppearance('シングルヒット');
        }
        if (number === 2) {
            setThisPlateAppearance('ツーベースヒット');
        }
        if (number === 3) {
            setThisPlateAppearance('スリーベースヒット');
        }
        if (number === 4) {
            setThisPlateAppearance('ホームラン');
        }
    };
    const otherDetail = (number: Number) => {
        if (number === 1) {
            setThisPlateAppearance('フォアボール');
        }
        if (number === 2) {
            setThisPlateAppearance('デッドボール');
        }
        if (number === 3) {
            setThisPlateAppearance('犠牲バント');
        }
        if (number === 4) {
            setThisPlateAppearance('犠牲フライ');
        }
        if (number === 5) {
            setThisPlateAppearance('エラー');
        }
    };
    const NextPlateAppearance = () => {
        setBattingRecord([...BattingRecord, ThisPlateAppearance]);
        setPlateAppearance(PlateAppearance + 1);
        confirm();
    };
    const out = () => {
        setBattingRecord([...BattingRecord, 'アウト']);
        setPlateAppearance(PlateAppearance + 1);
        confirm();
    };

    return (
        <>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 10,
                    pb: 6,
                }}>
                <Container maxWidth="sm">
                    <Typography
                        variant="h4"
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
                    {InputStatus === 'init' ? (
                        <>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center">
                                <Button
                                    variant="outlined"
                                    onClick={() => out()}>
                                    アウト
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => hit()}>
                                    ヒット
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => other()}>
                                    その他
                                </Button>
                            </Stack>
                        </>
                    ) : InputStatus === 'confirm' ? (
                        <>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center">
                                <Button
                                    variant="outlined"
                                    onClick={() => insertBattingRecord()}>
                                    終了する
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => init()}>
                                    続ける
                                </Button>
                            </Stack>
                        </>
                    ) : InputStatus === 'hit' ? (
                        <>
                            <Box
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    p: 1,
                                    m: 1,
                                    bgcolor: 'background.paper',
                                    flexWrap: 'wrap',
                                }}>
                                <Button
                                    variant="outlined"
                                    onClick={() => hitDetail(1)}>
                                    シングルヒット
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => hitDetail(2)}>
                                    ツーベース
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => hitDetail(3)}>
                                    スリーベース
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => hitDetail(4)}>
                                    ホームラン
                                </Button>
                            </Box>
                            {ThisPlateAppearance !== '' ? (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        p: 1,
                                        m: 1,
                                        bgcolor: 'background.paper',
                                        width: '100%',
                                        flexWrap: 'wrap',
                                    }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            mr: 1,
                                        }}
                                        onClick={() => init()}>
                                        戻る
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        onClick={() => NextPlateAppearance()}>
                                        決定する
                                    </Button>
                                </Box>
                            ) : (
                                <></>
                            )}
                        </>
                    ) : InputStatus === 'other' ? (
                        <>
                            <Box
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    p: 1,
                                    m: 1,
                                    bgcolor: 'background.paper',
                                    flexWrap: 'wrap',
                                }}>
                                <Button
                                    variant="outlined"
                                    onClick={() => otherDetail(1)}>
                                    フォアボール
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => otherDetail(2)}>
                                    デッドボール
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => otherDetail(3)}>
                                    犠牲バント
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => otherDetail(4)}>
                                    犠牲フライ
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={() => otherDetail(5)}>
                                    エラー
                                </Button>
                            </Box>
                            {ThisPlateAppearance !== '' ? (
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        p: 1,
                                        m: 1,
                                        bgcolor: 'background.paper',
                                        width: '100%',
                                        flexWrap: 'wrap',
                                    }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            mr: 1,
                                        }}
                                        onClick={() => init()}>
                                        戻る
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        onClick={() => NextPlateAppearance()}>
                                        決定する
                                    </Button>
                                </Box>
                            ) : (
                                <></>
                            )}
                        </>
                    ) : (
                        <></>
                    )}
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
                                width: '150px',
                                textAlign: 'center',
                            }}>
                            {index + 1 + '打席目'}
                        </Box>
                        <Box
                            sx={{
                                width: '150px',
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
