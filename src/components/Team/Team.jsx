import "./Team.css"

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
          <img src="../src/assets/images/team/Yann.png" alt="avatar" />
        </div>
        <span className="name">Yann GUIOT</span>
        <span className="fonction">Front Dev</span>
      </div>
      <div className="team-card">
        <div className="photo-background">
          <img src="../src/assets/images/team/Jaccomo.png" alt="avatar" />
        </div>
        <span className="name">Jaccomo DE GRÉGORIO</span>
        <span className="fonction">Front Dev</span>
      </div>
      <div className="team-card">
        <div className="photo-background">
          <img src="../src/assets/images/team/Alexis.png" alt="avatar" />
        </div> 
        <span className="name">Alexis DELOINGCE</span>
        <span className="fonction">Back Dev</span>     
      </div>
      <div className="team-card">
        <div className="photo-background">
          <img src="../src/assets/images/team/Lucas.png" alt="avatar" />
        </div> 
        <span className="name">Lucas MÉNÉ</span>
        <span className="fonction">Back Dev</span>     
      </div>
    </div>
  </div>
  </>
)
}