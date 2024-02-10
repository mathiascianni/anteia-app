interface Props {
    width?: string;
    height?: string;
    svg?: string;
    path?: string;
}

const Chat: React.FC<Props> = ({ width = "32", height = "32", svg, path }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={svg}>
            <path d="M9 13.5C9.55228 13.5 10 13.0523 10 12.5C10 11.9477 9.55228 11.5 9 11.5C8.44772 11.5 8 11.9477 8 12.5C8 13.0523 8.44772 13.5 9 13.5Z" fill="#F5F5F5" className={path} />
            <path d="M13 13.5C13.5523 13.5 14 13.0523 14 12.5C14 11.9477 13.5523 11.5 13 11.5C12.4477 11.5 12 11.9477 12 12.5C12 13.0523 12.4477 13.5 13 13.5Z" fill="#F5F5F5" className={path} />
            <path d="M18 12.5C18 13.0523 17.5523 13.5 17 13.5C16.4477 13.5 16 13.0523 16 12.5C16 11.9477 16.4477 11.5 17 11.5C17.5523 11.5 18 11.9477 18 12.5Z" fill="#F5F5F5" className={path} />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.9109 11.6976L4.24776 15.0161C4.24552 15.0375 4.24129 15.0699 4.23338 15.1116C4.21372 15.2154 4.17165 15.3752 4.08204 15.5658C3.90716 15.9378 3.53442 16.4639 2.71276 16.9253C2.52061 17.0332 2.31805 17.2207 2.22859 17.5098C2.13927 17.7984 2.19975 18.0686 2.29723 18.2693C2.47489 18.6352 2.8358 18.9126 3.21327 19.1242C4.0069 19.5691 5.35461 19.9859 7.38507 20.2415L8.80688 20.5043L9.4354 20.724C15.4527 22.8275 21.7499 18.3671 21.7499 11.9965V11.6596C21.7499 6.73812 17.7557 2.75 12.8304 2.75C7.90516 2.75 3.9109 6.73812 3.9109 11.6596V11.6976ZM5.74993 14.9615L5.411 11.6226C5.43098 7.54823 8.74426 4.25 12.8304 4.25C16.929 4.25 20.2499 7.56826 20.2499 11.6596V11.9965C20.2499 17.3315 14.975 21.0715 9.93039 19.308L9.19297 19.0502L7.61475 18.7585L7.593 18.7558C5.72852 18.5227 4.60984 18.1623 4.02949 17.8604C4.76411 17.3245 5.19378 16.7266 5.43949 16.204C5.58963 15.8847 5.66716 15.602 5.70717 15.3908C5.72718 15.2852 5.73788 15.1971 5.74358 15.1306C5.74643 15.0974 5.74803 15.0694 5.74893 15.0473C5.74937 15.0363 5.74964 15.0267 5.74979 15.0186L5.74995 15.0076L5.74997 15.003L5.74998 15.0009L5.74998 14.9989L4.99998 15C5.74306 14.999 5.74992 14.9985 5.74998 14.9989L5.74993 14.9615Z" fill="#F5F5F5" className={path} />
        </svg>

    )
}

export default Chat