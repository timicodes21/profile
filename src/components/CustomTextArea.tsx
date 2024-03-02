import { Textarea } from "./ui/textarea";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const CustomTextArea: React.FC<TextareaProps> = ({ label, ...rest }) => {
  return (
    <div>
      <p className="text-gray-100 text-16 mb-2 font-light">{label}</p>
      <Textarea
        {...rest}
        className="text-white-100 bg-input border-inputBorder border-2 focus:outline-0 focus:shadow-none rounded-[2px]"
      />
    </div>
  );
};

export default CustomTextArea;
