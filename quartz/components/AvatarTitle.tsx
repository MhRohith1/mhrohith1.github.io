import { QuartzComponent, QuartzComponentConstructor } from "./types";

const AvatarTitle: QuartzComponent = () => {
  return (
    <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "0.25rem", 
        alignItems:'center'
        }}>
      <img
        src='./static/rohith_muthukumar.png'
        alt="Rohith Muthukumar"
        style={{
            width:"100px",
            height:"100px",
            size:"0.5em",  
            borderRadius: "9999px",
            objectFit: "cover",
            border: "1px solid var(--lightgray)", 
            objectPosition: "25% 25%",
            transform:"scale(1.2)"
        }}
      />
    </div>
  )
}

export default (() => AvatarTitle) satisfies QuartzComponentConstructor
