"use client";
import { useCallback } from "react";

const MenuBar = ({ editor }: any) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    let url = window.prompt("URL", previousUrl);
    if (!url?.includes("http")) {
      url = `https://${url}`;
    }

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="p-2 w-[calc(100vw-16px)] 2xl:w-[calc(100vw*0.8)]  max-w-[2000px] flex bg-black border-2 border-black justify-start flex-wrap gap-2  items-center ">
      <div className=" h-full gap-2  flex justify-start items-center">
        <button
          type="button"
          title="Heading 2"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 })
              ? " bg-[#303030] rounded-lg text-lg h-8 text-white w-8 font-semibold"
              : "hover:bg-[#303030] text-lg h-8 w-8 rounded-lg  text-white font-semibold"
          }
        >
          {" "}
          H2
        </button>
        <button
          type="button"
          title="Heading 3"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 })
              ? " bg-[#303030] rounded-lg text-lg h-8 w-8 text-white font-semibold"
              : "hover:bg-[#303030] text-lg h-8 w-8 rounded-lg  font-semibold text-white"
          }
        >
          {" "}
          H3
        </button>
        <button
          type="button"
          title="Heading 4"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive("heading", { level: 4 })
              ? " bg-[#303030] rounded-lg text-lg h-8 w-8 font-semibold text-white"
              : "hover:bg-[#303030] h-8 w-8 rounded-lg  text-lg font-semibold text-white"
          }
        >
          H4
        </button>
      </div>
      <div className="bg-[#ffffff40] h-6 w-[1px] ml-1 mr-1  "></div>
      <button
        type="button"
        title="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "  bg-[#303030] rounded-lg h-8 w-8 flex justify-center items-center"
            : "hover:bg-[#303030] rounded-lg h-8 w-8 flex justify-center items-center"
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
          className="mx-auto"
        >
          <path
            d="M5.10505 12C4.70805 12 4.4236 11.912 4.25171 11.736C4.0839 11.5559 4 11.2715 4 10.8827V4.11733C4 3.72033 4.08595 3.43588 4.25784 3.26398C4.43383 3.08799 4.71623 3 5.10505 3C6.42741 3 8.25591 3 9.02852 3C10.1373 3 11.0539 3.98153 11.0539 5.1846C11.0539 6.08501 10.6037 6.81855 9.70327 7.23602C10.8657 7.44851 11.5176 8.62787 11.5176 9.48128C11.5176 10.5125 10.9902 12 9.27734 12C8.77742 12 6.42626 12 5.10505 12ZM8.37891 8.00341H5.8V10.631H8.37891C8.9 10.631 9.6296 10.1211 9.6296 9.29877C9.6296 8.47643 8.9 8.00341 8.37891 8.00341ZM5.8 4.36903V6.69577H8.17969C8.53906 6.69577 9.27734 6.35939 9.27734 5.50002C9.27734 4.64064 8.48047 4.36903 8.17969 4.36903H5.8Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        title="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? " rounded-lg bg-[#303030] h-8 w-8"
            : "hover:bg-[#303030] rounded-lg h-8 w-8"
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
          className="mx-auto"
        >
          <path
            d="M5.67494 3.50017C5.67494 3.25164 5.87641 3.05017 6.12494 3.05017H10.6249C10.8735 3.05017 11.0749 3.25164 11.0749 3.50017C11.0749 3.7487 10.8735 3.95017 10.6249 3.95017H9.00587L7.2259 11.05H8.87493C9.12345 11.05 9.32493 11.2515 9.32493 11.5C9.32493 11.7486 9.12345 11.95 8.87493 11.95H4.37493C4.1264 11.95 3.92493 11.7486 3.92493 11.5C3.92493 11.2515 4.1264 11.05 4.37493 11.05H5.99397L7.76894 3.95017H6.12494C5.87641 3.95017 5.67494 3.7487 5.67494 3.50017Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        title="Unordered List"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList")
            ? " rounded-lg bg-[#303030] h-8 w-8"
            : "hover:bg-[#303030] rounded-lg h-8 w-8"
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
          className="mx-auto"
        >
          <path
            d="M1.5 5.25C1.91421 5.25 2.25 4.91421 2.25 4.5C2.25 4.08579 1.91421 3.75 1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25ZM4 4.5C4 4.22386 4.22386 4 4.5 4H13.5C13.7761 4 14 4.22386 14 4.5C14 4.77614 13.7761 5 13.5 5H4.5C4.22386 5 4 4.77614 4 4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H4.5ZM2.25 7.5C2.25 7.91421 1.91421 8.25 1.5 8.25C1.08579 8.25 0.75 7.91421 0.75 7.5C0.75 7.08579 1.08579 6.75 1.5 6.75C1.91421 6.75 2.25 7.08579 2.25 7.5ZM1.5 11.25C1.91421 11.25 2.25 10.9142 2.25 10.5C2.25 10.0858 1.91421 9.75 1.5 9.75C1.08579 9.75 0.75 10.0858 0.75 10.5C0.75 10.9142 1.08579 11.25 1.5 11.25Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        title="Ordered List"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList")
            ? "  rounded-lg bg-[#303030] h-8 w-8"
            : "hover:bg-[#303030] rounded-lg h-8 w-8"
        }
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
          className="mx-auto"
        >
          <path
            d="M9 4V13"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13H6"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 27H6"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 19.9999C6 19.9999 9 16.9999 11 20C13 23 6 27 6 27"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.00001 34.5001C6.00001 34.5001 8.00001 31.5 11 33.5C14 35.5 11 38 11 38C11 38 14 40.5 11 42.5C8 44.5 6 41.5 6 41.5"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 38H9"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 4L6 6"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 24H43"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 38H43"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 10H43"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        title="Blockquote"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={
          editor.isActive("blockquote")
            ? " rounded-lg bg-[#303030] hover:bg-[#30303] h-8 w-8"
            : "hover:bg-[#303030] rounded-lg h-8 w-8"
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
          className="mx-auto"
        >
          <path
            d="M9.42503 3.44136C10.0561 3.23654 10.7837 3.2402 11.3792 3.54623C12.7532 4.25224 13.3477 6.07191 12.7946 8C12.5465 8.8649 12.1102 9.70472 11.1861 10.5524C10.262 11.4 8.98034 11.9 8.38571 11.9C8.17269 11.9 8 11.7321 8 11.525C8 11.3179 8.17644 11.15 8.38571 11.15C9.06497 11.15 9.67189 10.7804 10.3906 10.236C10.9406 9.8193 11.3701 9.28633 11.608 8.82191C12.0628 7.93367 12.0782 6.68174 11.3433 6.34901C10.9904 6.73455 10.5295 6.95946 9.97725 6.95946C8.7773 6.95946 8.0701 5.99412 8.10051 5.12009C8.12957 4.28474 8.66032 3.68954 9.42503 3.44136ZM3.42503 3.44136C4.05614 3.23654 4.78366 3.2402 5.37923 3.54623C6.7532 4.25224 7.34766 6.07191 6.79462 8C6.54654 8.8649 6.11019 9.70472 5.1861 10.5524C4.26201 11.4 2.98034 11.9 2.38571 11.9C2.17269 11.9 2 11.7321 2 11.525C2 11.3179 2.17644 11.15 2.38571 11.15C3.06497 11.15 3.67189 10.7804 4.39058 10.236C4.94065 9.8193 5.37014 9.28633 5.60797 8.82191C6.06282 7.93367 6.07821 6.68174 5.3433 6.34901C4.99037 6.73455 4.52948 6.95946 3.97725 6.95946C2.7773 6.95946 2.0701 5.99412 2.10051 5.12009C2.12957 4.28474 2.66032 3.68954 3.42503 3.44136Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        title="Underline"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={
          editor.isActive("underline")
            ? " rounded-lg bg-[#303030] h-8 w-8 hover:bg-[#30303]"
            : " h-8 w-8 rounded-lg hover:bg-[#303030]"
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
          className="mx-auto"
        >
          <path
            d="M5.00001 2.75C5.00001 2.47386 4.77615 2.25 4.50001 2.25C4.22387 2.25 4.00001 2.47386 4.00001 2.75V8.05C4.00001 9.983 5.56702 11.55 7.50001 11.55C9.43251 11.55 11 9.983 11 8.05V2.75C11 2.47386 10.7762 2.25 10.5 2.25C10.2239 2.25 10 2.47386 10 2.75V8.05C10 9.42571 8.88072 10.55 7.50001 10.55C6.1193 10.55 5.00001 9.42571 5.00001 8.05V2.75ZM3.49998 13.1001C3.27906 13.1001 3.09998 13.2791 3.09998 13.5001C3.09998 13.721 3.27906 13.9001 3.49998 13.9001H11.5C11.7209 13.9001 11.9 13.721 11.9 13.5001C11.9 13.2791 11.7209 13.1001 11.5 13.1001H3.49998Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        title="Horizontal Rule"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={
          editor.isActive("horizontalRule")
            ? " rounded-lg   h-8 w-8 "
            : " h-8 w-8 rounded-lg hover:bg-[#303030]"
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
          className="mx-auto"
        >
          <path
            d="M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        onClick={setLink}
        title="Add Link"
        className={
          editor.isActive("link")
            ? "rounded-lg   h-8 w-8 bg-[#303030]"
            : "h-8 w-8 rounded-lg hover:bg-[#303030]"
        }
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
          className="mx-auto"
        >
          <path
            d="M8.51194 3.00541C9.18829 2.54594 10.0435 2.53694 10.6788 2.95419C10.8231 3.04893 10.9771 3.1993 11.389 3.61119C11.8009 4.02307 11.9513 4.17714 12.046 4.32141C12.4633 4.95675 12.4543 5.81192 11.9948 6.48827C11.8899 6.64264 11.7276 6.80811 11.3006 7.23511L10.6819 7.85383C10.4867 8.04909 10.4867 8.36567 10.6819 8.56093C10.8772 8.7562 11.1938 8.7562 11.389 8.56093L12.0077 7.94221L12.0507 7.89929C12.4203 7.52976 12.6568 7.2933 12.822 7.0502C13.4972 6.05623 13.5321 4.76252 12.8819 3.77248C12.7233 3.53102 12.4922 3.30001 12.1408 2.94871L12.0961 2.90408L12.0515 2.85942C11.7002 2.508 11.4692 2.27689 11.2277 2.11832C10.2377 1.46813 8.94398 1.50299 7.95001 2.17822C7.70691 2.34336 7.47044 2.57991 7.1009 2.94955L7.058 2.99247L6.43928 3.61119C6.24401 3.80645 6.24401 4.12303 6.43928 4.31829C6.63454 4.51355 6.95112 4.51355 7.14638 4.31829L7.7651 3.69957C8.1921 3.27257 8.35757 3.11027 8.51194 3.00541ZM4.31796 7.14672C4.51322 6.95146 4.51322 6.63487 4.31796 6.43961C4.12269 6.24435 3.80611 6.24435 3.61085 6.43961L2.99213 7.05833L2.94922 7.10124C2.57957 7.47077 2.34303 7.70724 2.17788 7.95035C1.50265 8.94432 1.4678 10.238 2.11799 11.2281C2.27656 11.4695 2.50766 11.7005 2.8591 12.0518L2.90374 12.0965L2.94837 12.1411C3.29967 12.4925 3.53068 12.7237 3.77214 12.8822C4.76219 13.5324 6.05589 13.4976 7.04986 12.8223C7.29296 12.6572 7.52943 12.4206 7.89896 12.051L7.89897 12.051L7.94188 12.0081L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9951C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8012 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6791C2.53661 10.0438 2.54561 9.18863 3.00507 8.51227C3.10993 8.35791 3.27224 8.19244 3.69924 7.76544L4.31796 7.14672ZM9.62172 6.08558C9.81698 5.89032 9.81698 5.57373 9.62172 5.37847C9.42646 5.18321 9.10988 5.18321 8.91461 5.37847L5.37908 8.91401C5.18382 9.10927 5.18382 9.42585 5.37908 9.62111C5.57434 9.81637 5.89092 9.81637 6.08619 9.62111L9.62172 6.08558Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive("link")}
        title="Remove Link"
        className="h-8 w-8 hover:bg-[#303030]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="white"
          className="mx-auto"
        >
          <path
            d="M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L13.3536 2.35355ZM2.03735 8.46678C2.17398 9.12619 2.66918 9.67103 3.33886 9.89338L2.57833 10.6539C1.80843 10.2534 1.23784 9.53693 1.05815 8.66967C0.999538 8.38681 0.999604 8.06004 0.999703 7.56313L0.999711 7.50001L0.999703 7.43689C0.999604 6.93998 0.999538 6.61321 1.05815 6.33035C1.29846 5.17053 2.2379 4.28039 3.4182 4.055C3.70687 3.99988 4.04134 3.99993 4.56402 4.00001L4.62471 4.00001H5.49971C5.77585 4.00001 5.99971 4.22387 5.99971 4.50001C5.99971 4.77615 5.77585 5.00001 5.49971 5.00001H4.62471C4.02084 5.00001 3.78907 5.00225 3.60577 5.03725C2.80262 5.19062 2.19157 5.78895 2.03735 6.53324C2.00233 6.70225 1.99971 6.91752 1.99971 7.50001C1.99971 8.08251 2.00233 8.29778 2.03735 8.46678ZM12.9621 6.53324C12.8255 5.87397 12.3304 5.32922 11.661 5.10679L12.4215 4.34631C13.1912 4.74686 13.7616 5.46323 13.9413 6.33035C13.9999 6.61321 13.9998 6.93998 13.9997 7.43688L13.9997 7.50001L13.9997 7.56314C13.9998 8.06005 13.9999 8.38681 13.9413 8.66967C13.701 9.8295 12.7615 10.7196 11.5812 10.945C11.2925 11.0001 10.9581 11.0001 10.4354 11L10.3747 11H9.49971C9.22357 11 8.99971 10.7762 8.99971 10.5C8.99971 10.2239 9.22357 10 9.49971 10H10.3747C10.9786 10 11.2104 9.99777 11.3937 9.96277C12.1968 9.8094 12.8079 9.21108 12.9621 8.46678C12.9971 8.29778 12.9997 8.08251 12.9997 7.50001C12.9997 6.91752 12.9971 6.70225 12.9621 6.53324Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default MenuBar;
