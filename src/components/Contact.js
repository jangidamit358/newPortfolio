import React from 'react';
import './Contact.css';
import contactImg from "../images/my_pic.jpg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me.</h1>                            
                           <p className="hire__text white"> <img className="icons_contacts" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUCAgL///8AAADo6Ojw8PAeHh67u7vu7u719fXb29vLy8v8/PzR0dHe3t5ra2vs7Oynp6eMjIxMTEyCgoKwsLCampqTk5O8vLwPDw9DQ0MZGRnc3NzV1dUoKCjCwsJWVlY2NjZnZ2d2dnYsLCxISEiioqJVVVV1dXUhISGsrKxoaGjGQDJsAAAGxklEQVR4nO2c6XqyPBCGZUBFca1L1brW19Z+53+AH1kQkEkbuzn0eu5/KnLlYZKZySSh0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAbCjj3g35Cay0xaq5+ps6iZ5nrad2FMVxHEXD9XQ+2PwpkUSd4Jokak3+jilpVxFoWE/qo/HdoUVLh8KU1rIOGrW683HhaivRKImjzuNoNp/PZ2/bfhQXNPZ20jWm7VuOe2mrw96zU+JmQ0X2g9k6umjsPoiWSLTrXtra37skljRolZvB9iJyupKrkRqt4rCK//m2VPfsSeZk2wOpEmkflj3HcOHfUiVy18tcjkyJdEyunePopoYqjfYZhU2BEomia4FB5DYim66lX4zNY0p28sxIJybCvbLNzNQxWWnqdGxXdfniu0FU6aPK93PNJBq8dddPYRh2et3TYFkWSTQz/50Ik0gTRmCQMBGDqFW+KGwNigkC0SGWKPG62ZYTo/AYVy6Lpv8Kcmjfth31NxV8BIWVZuumV30NLYbclcVkhlbmbjtBEjlPqhkzRjxEQb/bak1bj93ic9nmyQwt9A+JoKBBq2rXM0ZkBlMpLX2YrS8X5yOPVrqjhnKGIjUdCjkj5qmpLWjMM1Pmvpf2+oZyshtauBTGH7cxFTnom6vby4vEg/5iIEahaxwGwcyjjanGiblBcsieiImL7ZUYibwvVW326mhEzUdzeWY1Ip3dTKX0U9q6FLIjkbuDTRpSK9ovNjpNepCicO5UuHX4muuklOhFD+YkG4s0Vh/ZzO8OWMfAMWTixeu0u+6st6PJqqjSTsDaF0+ru76QuM9n3g6FRYMPT5tco83oMrOZ0mNPihHXvD7Vwsq1Zbf0uM8lvuhvJpkRtbPxrob8LO6BWA0XlTR9lks07mZVNKKQsE9Hl8JjVeG5G/bX3XW/nV3T2VxihFa/zYyoy1MyFDaozwvkijWZIz2/nGyHjbKuSE0d+m2MMCadCFE4ZgWuWQMY56JVvhqNl9qjEWWdDZ0jfY/fk/EORJzAD6NZqnFkrLjJeqbuDEYwmUxCRjetVCcUM4+2kY2lnSxGDNSnafGDlG5aWVbq7j1z0ofi4zCB3lYHaKO6aUuIQuqVBfonzdaKtm5lAs/AylVxlptH34PrzC3xTprtWHy0RlwEud30JCrZCFF4vYLd8TeiSXMyZ6PsZisYZiBKmQib1tzoaOxfn9X1p4LdAjPFMOWMuRSFleT0hn6qjGiTdON5soEY5Z71/lT2IfgXy8y6x8qqKhpUhUchMf8SoD/jT82sYlKIF12rcKuNK0bi/nqa6Osj6KzS8JFVqBbL7byQ3gSFiwazyOZbtzbJWjaneMw9sXY7khRS+0pi37Nx2kvZ8aYTQPtHHf9jMUVFrmDjORR1z+xYhVPlpRoFhZJWMKp1Rb+8uWLDUKgNmQJ/8uJV9u4X/KdS+FQYh/EN2zp+Hnq9NmLskVaaCDEt+FI7d9YpqyBP02Anih7exqh6tQqL9lR+tS1KIbfKu/WQeG6F42yar/7zZj90dI/92SbfClMA93CoefXb5KLFvFTIFPgCMZtrfBbZ8hschrGtktImvvXfv0Fluu8dM7IbLI5Z1UavQMnalqHg1vX5DVKuG+Q99u2WqfTvYYtLJQ6faibRUuAmt0aD3ST1uZZK3eFOOrcsI3HH4RfgvE0iZLXzm6BmdffCX5O4ZDbZfM7dSIU9IHNT0JAOVacZgbh9o1+D2I21/nXiOpDtaS4hZp/Tt2DXP8t4TKbqg84rK/SFLCZ9C1xyEwTxyx8yIy8xqbjUGh8K5jvqlb8hOs56w3A7rqVGYt1N0G8WT1lklySzOmokNmio3bKXeW5h5TGupR35MzWqp5qtQ93S19HYecxWLmwCFwShPkhSNXF02tdNI9GO386vht2e68Ld10W9NBIt+d3unYerPpobciRqueJjqFmd9WtrcfHSMBSye9YXPva/S+w4ES4Vfjb1Lr5LyFIgenAdH3Ihr9z9AbTiB6MTKVv1/eGWbd4jrJk/begds+wpUgdxdSe8eIgW/KlhluhcP4W6COftcOrmTC2pGd2H3crUz9NY0tF4vXuKx/Nwn0DShPvkPA1WYFlbhUrj/uOuKuX44SdJp1TOI2+Wui9WqWPc1Re4FRBybu0rpBoP7jzO7k+sOeoFYY4MgHs3Si1RdeAxc7gvqmHC5kJpPM7XpeiRnOo/Bssolf/Nt6F+K2aoXxZ57yZ9P/ZNIPbNpvduzY9R2/UZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4I/xP2TVQx0nW7wKAAAAAElFTkSuQmCC"/>7620149158
                           ,<a href='https://mail.google.com/' target="_blank"><img className="icons_contacts" src="data:image/jpeg;base64,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"/>jangidamit358@gmail.com</a>,
                           <a href='https://www.linkedin.com/in/amit-jangid-215b83203/' target="_blank"><img className="icons_contacts" src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png"/>Linkedin</a> or <a href='https://github.com/jangidamit358' target="_blank"><img className="icons_contacts" src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"/>Github</a>
                         
                           </p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
