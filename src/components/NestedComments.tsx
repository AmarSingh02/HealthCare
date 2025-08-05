import React, { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";

interface Comment {
  id: number;
  text: string;
  replies: Comment[];
}

const NestedComments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, text: "This is the first comment", replies: [] },
    // { id: 2, text: "Another comment", replies: [] },
  ]);
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");

  const handleReply = (parentId: number) => {
    if (!replyText.trim()) return;
    setComments((prev) =>
      prev.map((c) =>
        c.id === parentId
          ? {
              ...c,
              replies: [
                ...c.replies,
                { id: Date.now(), text: replyText, replies: [] },
              ],
            }
          : c
      )
    );
    setReplyText("");
    setActiveCommentId(null);
  };

  const renderComments = (comments: Comment[]) =>
    comments.map((comment) => (
      <div key={comment.id} style={{ marginLeft: "20px", marginTop: "10px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ marginRight: "10px" }}>{comment.text}</p>
          <BiCommentDetail
            style={{ cursor: "pointer" }}
            onClick={() =>
              setActiveCommentId(
                activeCommentId === comment.id ? null : comment.id
              )
            }
          />
        </div>

        {activeCommentId === comment.id && (
          <div style={{ marginTop: "5px" }}>
            <input
              type="text"
              placeholder="Write a reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              style={{border:'none', outline:'none'}}
            />
            <button onClick={() => handleReply(comment.id)}>Reply</button>
          </div>
        )}

        {comment.replies.length > 0 && renderComments(comment.replies)}
      </div>
    ));

  return <div>{renderComments(comments)}</div>;
};

export default NestedComments;
