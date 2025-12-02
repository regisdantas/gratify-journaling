import React from "react";
import { CardContainer } from "./styles";
import { FiTrash2 } from "react-icons/fi";
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
// import remarkMdx from "remark-mdx";
// import remarkPrism from "remark-prism";

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
  const textRef = React.useRef<HTMLSpanElement>(null);
  const titleRef = React.useRef<HTMLSpanElement>(null);
  const [editing, setEditing] = React.useState(false);
  const objContent = isJsonString(content)
    ? JSON.parse(content)
    : { ...defaultContent, text: content };
  const [value, setValue] = React.useState(objContent.text  || "");
  return (
    <CardContainer key={id} color={objContent.color}>
      <div className="ContentContainer">
        <header>
          <strong>
            {objContent.pinned ? (
              <TbPinnedOff title="Unpin note" size={24} onClick={() => onChangeContent(id, JSON.stringify({...objContent, pinned: false}))}/>
            ) : (
              <TbPinned title="Pin note" size={24} onClick={() => onChangeContent(id, JSON.stringify({...objContent, pinned: true}))} />
            )}
            {/* <input type={'checkbox'} checked={objContent.pinned} onChange={e => onChangeContent(id, JSON.stringify({...objContent, pinned: e.target.checked}))} /> */}
            {/* <select
              title="Note type"
              value={objContent.type}
              onChange={(e) =>
                onChangeContent(
                  id,
                  JSON.stringify({ ...objContent, type: e.target.value })
                )
              }
            >
              <option value="note">📝</option>
              <option value="gratitude">🙏</option>
              <option value="journal">📓</option>
            </select> */}
            <strong>
              <span
                title="Note name"
                ref={titleRef}
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

          <FiTrash2  title="Delete note" onClick={(e) => onDeleteCard(id)}></FiTrash2>
        </header>
        {/* <span
          title="Note content"
          ref={textRef}
          role="textbox"
          contentEditable
          data-placeholder="What do you have for today?"
          onBlur={(e) =>
            onChangeContent(
              id,
              JSON.stringify({ ...objContent, text: encodeContent(e.target.innerText) })
            )
          }
          suppressContentEditableWarning={true}
        >
          {objContent.text}
        </span> */}
        {editing ? (
        <textarea
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
          className="w-full p-2 border rounded"
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
              // remarkGridTables,
              // remarkPrism,
              remarkFrontmatter,
              // remarkMdx
            ]}
          />
          </div>)}
        <span className="date">{formatDate(date)}</span>
      </div>
    </CardContainer>
  );
};

export default Card;
