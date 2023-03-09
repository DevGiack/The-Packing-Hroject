import "./Team.css"

export const Team = () => {

return (
  <div className="global-team">
    <div className="part_1-team">
      <span id="big-title">LEADERSHIP</span>
      <span id="title">Meet Our Team</span>
      <span id="title-border"></span>
    </div>
    <div className="part_2-team">
      <div className="card">
        <div className="photo-background">
          <img src="../src/assets/images/team/Yann.png" alt="avatar" />
        </div>
        <span className="Name">Yann GUIOT</span>
        <span className="Fonction">Front Dev</span>
      </div>
      <div className="card">
        <div className="photo-background">
          <img src="../src/assets/images/team/Jaccomo.png" alt="avatar" />
        </div>
        <span className="Name">Jaccomo DE GRÉGORIO</span>
        <span className="Fonction">Front Dev</span>
      </div>
      <div className="card">
        <div className="photo-background">
          <img src="../src/assets/images/team/Alexis.png" alt="avatar" />
        </div> 
        <span className="Name">Alexis DELOINGCE</span>
        <span className="Fonction">Back Dev</span>     
      </div>
      <div className="card">
        <div className="photo-background">
          <img src="../src/assets/images/team/Lucas.png" alt="avatar" />
        </div> 
        <span className="Name">Lucas MÉNÉ</span>
        <span className="Fonction">Back Dev</span>     
      </div>
    </div>
  </div>
)
}