import React from "react";
import { CardContainer } from "./styles";
import { FiTrash2, FiLock, FiUnlock, FiStar, FiSettings , FiType, FiMic, FiVolume2, FiVolumeX} from "react-icons/fi";

import { isJsonString } from "../../utils";
import { TbPinned, TbPinnedOff } from "react-icons/tb";
import { formatDate } from "../../utils";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkEmoji from "remark-emoji";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkToc from "remark-toc";
import remarkBreaks from "remark-breaks";
import stringWidth from "string-width";

import { useSpeechRecognition } from "../../hooks/useSpeechRecognition";
import { useTextToSpeech } from "../../hooks/useTextToSpeech";

interface ICardProps {
  id: string;
  number: number;
  date: string;
  content: string;
  onDeleteCard: any;
  onChangeContent: any;
}

const defaultContent = {
  title: "",
  type: "record",
  text: "",
  color: "red",
  pinned: false,
};

const Card: React.FC<ICardProps> = ({
  id,
  number,
  date,
  content,
  onDeleteCard,
  onChangeContent,
}: ICardProps) => {
  const { listening, transcript, startListening, stopListening} = useSpeechRecognition();
  const { speak, speaking, stopSpeaking } = useTextToSpeech();
  const [editing, setEditing] = React.useState(false);
  const objContent = isJsonString(content)
    ? JSON.parse(content)
    : { ...defaultContent, text: content };
  const [value, setValue] = React.useState(objContent.text  || "");
  return (
    <CardContainer key={id} color={objContent.color}>
      <div className="ContentContainer">
        <header className="header">
          <strong>
            {objContent.pinned ? (
              <TbPinnedOff title="Unpin note" size={22} onClick={() => onChangeContent(id, JSON.stringify({...objContent, pinned: false}))}/>
            ) : (
              <TbPinned title="Pin note" size={22} onClick={() => onChangeContent(id, JSON.stringify({...objContent, pinned: true}))} />
            )}
            <strong>
              <span
                title="Note name"
                role="textbox"
                contentEditable
                data-placeholder="🙋 Give me a name"
                onBlur={(e) =>
                  onChangeContent(
                    id,
                    JSON.stringify({ ...objContent, title: e.target.innerText })
                  )
                }
              >
                {objContent.title}
              </span>
            </strong>
          </strong>

          <FiTrash2  size={18} title="Delete note" onClick={(e) => onDeleteCard(id)}/>
        </header>
        <header className="toolbar">
          <FiLock  size={18} title="Lock note"/>
          <FiSettings size={18} title="Settings"/>
          <FiType size={18} title="Load template"/>
          <FiMic size={18} title="Speech note"/>
          {(speaking?<FiVolumeX size={18} title="Stop hearing note" onClick={stopSpeaking}/>:<FiVolume2 size={18} title="Hear note" onClick={(e) => speak(value)}/>)}
        </header>
        {editing ? (
        <textarea
          className="reactMarkDown"
          placeholder={`* ❓ What do you have for today?


<markdown editor>`}
          onFocus={(e) => {
            const el = e.currentTarget;
            el.style.height = "auto";
            el.style.height = `${el.scrollHeight}px`;
          }}
          onChange={(e) => {
            const el = e.currentTarget;
            el.style.height = "auto";
            el.style.height = `${el.scrollHeight}px`;
            setValue(e.target.value)
          }}
          autoFocus
          value={value || ""}

          onBlur={(e) => {
              onChangeContent(
                id,
                JSON.stringify({ ...objContent, text: value })
              )
              setEditing(false)
            }
          }
        />
      ) : (
        <div className={"reactMarkDown"} onClick={() => setEditing(true)} >
         <ReactMarkdown
            children={value || "* ❓ What do you have for today?"}
            remarkPlugins={[
              [
                remarkEmoji,
                {
                  padSpaceAfter: false,
                  emoticon: true,
                },
              ],
              [remarkToc, { tight: true, ordered: true }],
              [remarkGfm, { stringLength: stringWidth }],
              remarkMath,
              rehypeKatex,
              remarkBreaks,
              remarkFrontmatter,
            ]}
          />
          </div>)}
        <span className="date">{formatDate(date)}</span>
      </div>
    </CardContainer>
  );
};

export default Card;
