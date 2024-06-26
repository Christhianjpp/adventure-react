interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {
    width?: string | number;
    height?: string | number;
}
export const IconChatBoxOutline: React.FC<SvgComponentProps> = ({ width = '1em', height = '1em', ...props }) => (


    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
        width={width}
        height={height}
        {...props}
    >
        <path
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={32}
            d="M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56z"
        />
    </svg>
)

