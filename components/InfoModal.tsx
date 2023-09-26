import useInfoModal from "@/hooks/useInfoModel";
import useMovie from "@/hooks/useMovie";
import React, { useEffect, useState } from "react";

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible);

  const { movieId } = useInfoModal();
  const {
    data: {},
  } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  return <div></div>;
};

export default InfoModal;
