import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

const ChatHistory = ({ chatHistory }) => {
    return (
        <>
            {chatHistory.map((message, index) => (
                <div
                    key={index}
                    className={`flex items-start py-2 px-4 rounded-lg ${
                        message.type === "user"
                            ? "bg-gray-100 text-green-800"
                            : "bg-green-700 text-white"
                    }`}
                >
                    {message.type === "user" && (
                        <span className="mr-2 font-bold text-green-600">Você:</span>
                    )}

                    <div>
                    <ReactMarkdown>{String(message.message)}</ReactMarkdown>
                    </div>
                </div>
            ))}
        </>
    );
};

ChatHistory.PropTypes = {
    chatHistory : PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(['user','system']).isRequired,
            message:PropTypes.string.isRequired,
        })
    ).isRequired
}

export default ChatHistory;
