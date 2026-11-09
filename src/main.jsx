import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";

import { ToastContainer } from "react-toastify";
import { FavouriteContext, FavouritesProvider } from "./context/FavouriteContext.jsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <FavouritesProvider>
      <ToastContainer />
      <AppRoutes />
   </FavouritesProvider>
  </QueryClientProvider>,
);
