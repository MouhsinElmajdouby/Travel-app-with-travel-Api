import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try {
        const {
            data: { data },
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                params: {
                    bl_latitude: bl_lat ? bl_lat : "-7.5898434",
                    tr_latitude: tr_lat ? tr_lat : "33.5731104",
                    bl_longitude: bl_lng ? bl_lng : "-7.5898434",
                    tr_longitude: tr_lng ? tr_lng : "33.5731104",
                    limit: "30",
                    currency: "USD",
                    lunit: "km",
                    lang: "en_US",
                },
                headers: {
                    "X-RapidAPI-Key": "11c74cfe0amshd9c448a134f5afep1067c5jsn546de1585d5d",
                    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                },
            }
        );

        return data;
    } catch (error) {
        return null;
    }
};