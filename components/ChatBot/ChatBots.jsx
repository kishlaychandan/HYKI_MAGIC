import style from './ChatBot.module.css';
import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import { FaRobot, FaTimes } from "react-icons/fa";

function ChatBots() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatBot = () => {
        setIsOpen(!isOpen);
    };
    const steps = [
        {
            id: 'Greet',
            message: 'Hello, Welcome to Kamakhya Enterprises!',
            trigger: 'AskName'
        },
        {
            id: 'AskName',
            message: 'What is your name?',
            trigger: 'Name'
        },
        {
            id: 'Name',
            user: true,
            trigger: 'AskIssue'
        },
        {
            id: 'AskIssue',
            message: 'Please select your query from the options below.',
            trigger: 'issues'
        },
        {
            id: 'issues',
            options: [
                { value: 'AboutHyki', label: 'About Kamakhya Enterprises, Hyki', trigger: 'AboutHyki' },
                { value: 'PaymentMethods', label: 'How to do Payment?', trigger: 'PaymentMethods' },
                { value: 'PlatformsAvailable', label: 'Platforms Available', trigger: 'PlatformsAvailable' },
                { value: 'FragranceOptions', label: 'Fragrances varities?', trigger: 'FragranceOptions' }
            ]
        },
        {
            id: 'AboutHyki',
            message: 'Kamakhya Enterprises is a leading brand in the field of cleaning products. We offer a wide range of high quality products.',
            trigger: 'AnythingElse'
        },
        {
            id: 'PaymentMethods',
            message: 'You can make payments through COD, UPI, or online payment methods.',
            trigger: 'AnythingElse'
        },
        {
            id: 'PlatformsAvailable',
            message: 'Our products are available on Swiggy Minis, Flipkart, India Mart and Amazon.',
            trigger: 'AnythingElse'
        },
        {
            id: 'FragranceOptions',
            message: 'We offer five fragrances: Mango, Jasmine, Lavender, Sandalwood, and Lemon.',
            trigger: 'AnythingElse'
        },
        {
            id: 'AnythingElse',
            message: 'Is there anything else I can assist you with?',
            trigger: 'FinalResponse'
        },
        {
            id: 'FinalResponse',
            options: [
                { value: 'Yes', label: 'Yes', trigger: 'AskIssue' },
                { value: 'No', label: 'No', trigger: 'Goodbye' }
            ]
        },
        {
            id: 'Goodbye',
            message: 'Thank you for shopping with us. Have a great day!',
            end: true
        }
    ];

    return (
        <div className={style.chatbotContainer}>
            <div className={style.chatbotIcon} onClick={toggleChatBot}>
                <div className={style.icon}>
                    {isOpen ? <FaTimes size="30" /> : <FaRobot size="30" />}
                </div>
            </div>
            {isOpen && (
                <Segment className={style.chatbotSegment}>
                    <ChatBot steps={steps} />
                </Segment>
            )}
        </div>
    );
}

export default ChatBots;
