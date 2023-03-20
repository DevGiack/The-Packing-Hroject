import "./Team.css"
import yann from "../../assets/images/team/Yann.png"
import jack from "../../assets/images/team/Jaccomo.png"
import lucas from "../../assets/images/team/Lucas.png"
import alexis from "../../assets/images/team/Alexis.png"

export const Team = () => {
    return (
        <>
            <div className="bloc-title">
                <span id="big-title">LEADERSHIP</span>
                <span id="little-title">Meet Our Team</span>
                <span id="title-border"></span>
            </div>
            <div className="global-team">
                <div className="bloc-team">
                    <div className="team-card">
                        <div className="photo-background">
                            <img src={yann} alt="avatar" />
                        </div>
                        <span className="name">Yann GUIOT</span>
                        <span className="fonction">Front Dev</span>
                    </div>
                    <div className="team-card">
                        <div className="photo-background">
                            <img src={jack} alt="avatar" />
                        </div>
                        <span className="name">Jaccomo DE GRÉGORIO</span>
                        <span className="fonction">Front Dev</span>
                    </div>
                    <div className="team-card">
                        <div className="photo-background">
                            <img src={alexis} alt="avatar" />
                        </div>
                        <span className="name">Alexis DELOINGCE</span>
                        <span className="fonction">Back Dev</span>
                    </div>
                    <div className="team-card">
                        <div className="photo-background">
                            <img src={lucas} alt="avatar" />
                        </div>
                        <span className="name">Lucas MÉNÉ</span>
                        <span className="fonction">Back Dev</span>
                    </div>
                </div>
            </div>
        </>
    )
}
