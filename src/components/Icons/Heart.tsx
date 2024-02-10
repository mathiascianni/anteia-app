interface Props {
  width?: string;
  height?: string;
  svg?: string;
  path?: string;
}

const Heart: React.FC<Props> = ({ width = "24", height = "24", svg, path }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={svg}>
      <path d="M21.8085 11.168C20.8324 15.3014 15.1219 18.9654 12.8918 20.2579C12.3347 20.5807 11.6653 20.5807 11.1082 20.2579C8.87811 18.9654 3.16765 15.3014 2.19153 11.168C1.31012 7.43556 3.54708 3.55747 7.33511 3.50174C7.41331 3.50059 7.49265 3.5 7.57317 3.5C9.09809 3.5 10.4595 4.26167 11.2576 4.82479C11.6936 5.13244 12.3064 5.13244 12.7424 4.8248C13.5405 4.26167 14.9019 3.5 16.4268 3.5C16.5073 3.5 16.5867 3.50059 16.6649 3.50174C20.4529 3.55747 22.6899 7.43556 21.8085 11.168Z" fill="#F5F5F5" className={path} />
    </svg>
  )
}

export default Heart