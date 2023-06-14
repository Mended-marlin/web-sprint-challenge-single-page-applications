import React from "react"
import {ReactComponent as Github} from "./github.svg"
import {ReactComponent as Linkedin} from "./linkedin.svg"
export default function Footer(props) {
    return (
        <footer>
            <div className="credits">
                Made with fun by Jesus Olaiz
            </div>
            <div className="socials">
                <a href="linkedin.com/in/jesus-olaiz">
                    <Linkedin className="linkedIn-logo" />
                </a>

                <a href="https://github.com/bloominstituteoftechnology/web-sprint-challenge-single-page-applications"><Github className="github-logo"/></a>
            </div>
        </footer>
    )
}