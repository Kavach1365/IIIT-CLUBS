import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import getUserInfo from "../utils/userInfo";
import clubProfile from "../../utils/clubProfile";

const ProtectedRouteClubAdmin = ({ children }) => {
    const { id } = useParams();
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const userData = getUserInfo();
            if (!id) return;

            try {
                const clubData = await clubProfile({ clubId: id });
                if (userData.isSuperAdmin || clubData[0].clubAdmins.includes(userData._id)) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            } catch (error) {
                console.error("Error fetching club data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);
    if (loading) {
        return <div></div>;
    }
    if (!id || !isAdmin) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRouteClubAdmin;
