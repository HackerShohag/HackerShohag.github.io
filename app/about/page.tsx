import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

function AboutPage() {
    return (
        <>
            <Head>
                <title>About Page</title>
                <link type='script' href='../../stackerCards.js' />
            </Head>
            <div>
                <h1>About Page</h1>
                <div className='typewriter'>
                    <ul>
                        <li className="active" style={{ transformOrigin: '50% 50%' }}>
                            <div className="typewriter2">
                                <Image src="/keyboard.png" alt="" width={500} height={500} />
                                <h1>
                                    Codifying the existances.
                                </h1>
                            </div>
                        </li>
                        <li>
                            <div className="typewriter2">
                                <Image src="/ravendownloader.png" alt=""
                                    style={{ borderBottomLeftRadius: '0%', borderBottomRightRadius: '0%', fontSize: 'small' }} width={500} height={500} />
                                <h1 style={{ top: '92%' }}>
                                    Special acquaintance in C++
                                </h1>
                            </div >
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AboutPage