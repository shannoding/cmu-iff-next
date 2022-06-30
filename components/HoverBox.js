export function HoverImageBox(props) {
	return (
	<div
	  {...props}
      style={{backgroundImage: `url('${props.img_src_front}')` }}
      onMouseEnter={(e) => { e.target.style.backgroundImage = `url('${props.img_src_back}')` }}
      onMouseLeave={(e) => { e.target.style.backgroundImage = `url('${props.img_src_front}')` }}
     >
     </div>)
}