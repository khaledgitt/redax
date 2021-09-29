import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Home() {
    return (
        <div className="home-layout">
            <h1>home page</h1>
            <div className="carou">
                <Carousel style={{ height: "300px" }}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://graphicriver.img.customer.envatousercontent.com/files/252400564/Business-1693-prw.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=4bb09b1133ff888a567c6603b2d88011"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX31033235.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-steam-wave-international-film-festival-banner-poster-image_195212.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="home-body">
                <h1>TunBest</h1>
                <p>maeamekqsdjijiae aekojikqsuidhuia zaehuioioopqsdjklhaee aehjhqsdbhjiaze hqsdmmsdiuf hjaqsehjhjqsdbqspdpaerbhgqsd hqsedhhaeb</p>
            </div>
        </div>
    )
}
