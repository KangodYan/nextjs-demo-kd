import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { CMSDOMAIN } from "@/utils";

interface IHomeProps {
  title: string;
  description: string;
}

// Home页面的BFF层接口
const getHomeData = (req: NextApiRequest, res: NextApiResponse<IHomeProps>) => {
  axios.get(`${CMSDOMAIN}/api/homes`).then((result) => {
    const { title, description } = result.data || {};

    res.status(200).json({
      title,
      description,
    });
  });
};

export default getHomeData;