import type { NextApiRequest, NextApiResponse } from 'next';
const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../../baseball-score-37-firebase-adminsdk.json'); // 秘密鍵を取得
const admin = require('firebase-admin');

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const COLLECTION_NAME = 'batting_records';
    //　初期化する
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: cert(serviceAccount),
        });
    }
    const db = getFirestore();
    const targetDoc = db.collection(COLLECTION_NAME).doc().id;
    if (req.method === 'POST') {
        const docRef = db.collection(COLLECTION_NAME).doc();
        const { batting_record } = req.body;
        const insertData = {
            batting_record: batting_record,
            create_at: new Date(),
        };
        docRef.set(insertData);
    } else if (req.method === 'PATCH') {
        const docRef = db.collection(COLLECTION_NAME).doc(targetDoc);
        const updateData = {
            datano: '1',
            name: 'updateSynfo',
            email: 'updateSynfo@example.com',
        };
        docRef.set(updateData);
    } else if (req.method === 'GET') {
        const doc = await db.collection(COLLECTION_NAME).doc(targetDoc).get();
        console.log(doc);
    } else if (req.method === 'DELETE') {
        const doc = await db
            .collection(COLLECTION_NAME)
            .doc(targetDoc)
            .delete();
    }
    res.status(200);
}
