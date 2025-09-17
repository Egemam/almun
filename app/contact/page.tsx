'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(<></>);
    const [canSubmit, setCanSubmit] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(<p>Sending...</p>);
        setCanSubmit(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });
            if (response.ok) {
                setStatus(<p className="bg-green-500 p-1 rounded-lg text-center">Ticket created successfully</p>);
                setName('');
                setEmail('');
                setMessage('');
                setTimeout(() =>
                    {
                        setStatus(<></>);
                    },
                    3000);
            } else {
                setStatus(<p className="bg-red-700 p-1 rounded-lg text-center">Failed to create a ticket</p>);
                setTimeout(() =>
                    {
                        setStatus(<></>);
                    },
                    3000);
            }
        } catch (error) {
            console.log(error)
            setStatus(<p className="bg-red-700 p-1 rounded-lg text-center">An error has occured</p>)
            setTimeout(() =>
                {
                    setStatus(<></>);
                },
                3000);
        }
        setCanSubmit(false);
    };

    return (
        <main className='md:mt-20 grid grid-cols-1 md:grid-cols-2 items-center grow justify-items-center p-10 gap-y-5'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md w-70 mt-10">
                <label className='text-2xl'><strong>Create A Support Ticket</strong></label>
                <section className="text-sm text-gray-50 flex flex-col gap-1">
                    <label htmlFor="name" className='text-lg'>Name:</label>
                    <input
                        type="text"
                        id='name'
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                </section>
                <section className="text-sm text-gray-50 flex flex-col gap-1">
                    <label htmlFor="mail" className='text-lg'>Email:</label>
                    <input
                        type="email"
                        id='mail'
                        placeholder="johndoe@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                </section>
                <section className="text-sm text-gray-50 flex flex-col gap-1">
                    <label htmlFor="message" className='text-lg'>Message:</label>
                    <input
                        type="text"
                        id='message'
                        placeholder="..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="p-2 border border-gray-300 rounded"
                    />
                </section>
                <section className="text-sm text-gray-50 flex flex-col gap-1">
                    <button
                        type="submit"
                        disabled={canSubmit}
                        className="duration-300 w-full bg-neutral-950/10 hover:bg-neutral-950/40 text-white text-lg py-2 rounded-md"
                    >
                        Send
                    </button>
                </section>
                {status}
            </form>
            <div className="flex flex-col items-center">
                <h1 className='text-2xl text-center'><strong>Executive Team Contact Information</strong></h1>
                <div className="flex flex-col gap-2 md:w-3/4 p-2 w-full md:p-0">
                    <div id="usg">
                        <h2 className="text-lg text-center">
                            Secretary General
                        </h2>
                        <p className="flex justify-between items-center text-sm">
                            Yasemin Raithel
                            <Link href="https://wa.me/905367840226" className="underline">0 (505) 033 72 44</Link>
                        </p>
                    </div>
                    <div id="dg">
                        <h2 className="text-lg text-center">
                            Director General
                        </h2>
                        <p className="flex justify-between items-center text-sm">
                            Can Kurnaz
                            <Link href="https://wa.me/905459094230" className="underline">+90 545 909 42 30</Link>
                        </p>
                    </div>
                    <div id="ddg">
                        <h2 className="text-lg text-center">
                            Deputy Director General
                        </h2>
                        <p className="flex justify-between items-center text-sm">
                            Yiğit Bodur
                            <Link href="https://wa.me/905305239930" className="underline">+90 530 523 99 30</Link>
                        </p>
                    </div>
                    <div id="aa">
                        <h2 className="text-lg text-center">
                            Academic Advisor
                        </h2>
                        <p className="flex justify-between items-center text-sm">
                            Bedirhan Cura
                            <Link href="https://wa.me/905458538602" className="underline">+90 545 853 86 02</Link>
                        </p>
                    </div>
                    <div id="oa">
                        <h2 className="text-lg text-center">
                            Organization Advisor
                        </h2>
                        <p className="flex justify-between items-center text-sm">
                            Mert Sürücü
                            <Link href="https://wa.me/905414408739" className="underline">+90 541 440 87 39</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}