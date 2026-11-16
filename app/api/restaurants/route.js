import {NextResponse} from 'next/server';import {db} from '../../../lib/db';
export async function GET(){try{const [rows]=await db().query('SELECT * FROM restaurants WHERE is_active=1 ORDER BY rating DESC');return NextResponse.json(rows)}catch(e){return NextResponse.json({error:'Database connection unavailable. Import database.sql and configure .env.local.'},{status:503})}}
