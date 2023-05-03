import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import "../styles/editor.css";

const Tiptap = ({ setDescription, formSubmitting, defaultContent }: any) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
      }),
      Underline,
      HorizontalRule,
      Link.configure({
        HTMLAttributes: {
          target: "_blank",
        },
        autolink: false,
      }),
    ],

    content: defaultContent,
    editorProps: {
      attributes: {
        class:
          "text-editor  bg-white p-4 rounded-br-md rounded-bl-md min-h-[600px]  mt-0 lg:min-h-[800px] focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      setDescription(editor.getHTML());
    },
  });

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
