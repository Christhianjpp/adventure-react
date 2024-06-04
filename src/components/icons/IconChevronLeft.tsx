interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {
    width?: string | number;
    height?: string | number;
}
export const IconChevronLeft: React.FC<SvgComponentProps> = ({ width = '1em', height = '1em', ...props }) => (

    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        fill="#555555"
        viewBox="0 -960 960 960"
        {...props}
    >
        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
)

