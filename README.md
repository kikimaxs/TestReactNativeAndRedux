# TestProj — React Native + Redux Toolkit

This project demonstrates React Native with Redux Toolkit and RTK Query for state management and data fetching. It includes:
- A `Home` screen that fetches and lists posts.
- A `PostDetails` screen that fetches a single post by selection.
- A global selection state handled with Redux Toolkit `createSlice`.
- Data fetching via RTK Query `createApi` using the `fetch` API under the hood.

## Prerequisites
- Node.js `>=20`
- Android SDK (for Android build)
- (Optional) Xcode on macOS for iOS build

Check Node version:
```bash
node -v
```

## Install Dependencies
Install project dependencies:
```bash
npm install
```

## Start Metro Bundler
Start the React Native bundler:
```bash
npm run start
```

## Run on Android
Build and run the app on an Android device/emulator:
```bash
npm run android
```

## Run on iOS (macOS only)
Build and run the app on an iOS Simulator (requires macOS):
```bash
npm run ios
```

## Project Overview
- Entry: `index.js` registers the main component.
- App root: `src/index.tsx` wraps the app with the Redux `Provider` and renders `Root`.
- Screen router: `src/modules/index.tsx` switches between `Home` or `PostDetails` based on selection state.
- Store setup: `src/config/store.ts` configures Redux store and RTK Query middleware.
- Global state: `src/store/rootReduces.ts` combines reducers and defines `selection` slice.
- Data fetching: `src/store/api.ts` defines `productsApi` using RTK Query.

## Redux Toolkit Setup
- Store configuration (`src/config/store.ts`): uses `configureStore`, adds `productsApi.middleware`, and exports `store`, `RootState`, `AppDispatch`.
- Root reducer (`src/store/rootReduces.ts`):
  - Adds `productsApi.reducer` under `productsApi.reducerPath`.
  - Defines `selectionSlice` with actions: `select(id)` and `unselect()`.

Store provider (`src/index.tsx`):
```tsx:src%2Findex.tsx
export default function App() {
    return (
        <Provider store={store}>
            <Root/>
        </Provider>
    );
}
```

Selection slice usage example (`src/store/rootReduces.ts`):
```ts:src%2Fstore%2FrootReduces.ts
const selectionSlice = createSlice({
  name: 'selection',
  initialState: { selectedPostId: null as number | null },
  reducers: {
    select(state, action: PayloadAction<number>) {
      state.selectedPostId = action.payload;
    },
    unselect(state) {
      state.selectedPostId = null;
    },
  },
});
```

## Fetch API via RTK Query
RTK Query is configured with `fetchBaseQuery`, which internally uses the browser-like `fetch` API. Endpoints are defined and exposed as hooks.

API definition (`src/store/api.ts`):
```ts:src%2Fstore%2Fapi.ts
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<PostList[], void>({
      query: () => '/posts',
      transformResponse: (res: any) => res as PostList[],
    }),
    getProductDetail: builder.query<PostList, number>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});
```

### Using query hooks in components
Home screen (`src/modules/Home/Screens/index.tsx`):
```tsx:src%2Fmodules%2FHome%2FScreens%2Findex.tsx
export default function HomeScreen() {
  const { data, error, isLoading, refetch } = useGetProductsQuery();
  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => dispatch(selectionActions.select(item.id))} style={styles.card}>
      {/* Renders list and dispatches selection to global state */}
      {/* ... existing code ... */}
    </TouchableOpacity>
  );
}
```

Post details screen (`src/modules/PostDetails/Screens/index.tsx`):
```tsx:src%2Fmodules%2FPostDetails%2FScreens%2Findex.tsx
export default function PostDetailsScreen() {
  const selectedPostId = useSelector((state: RootState) => state.selection.selectedPostId);
  const { data: detail, isFetching, error } = useGetProductDetailQuery(selectedPostId as number, {
    skip: !selectedPostId, // Avoid fetching if nothing is selected
  });
}
```

### RTK Query states and actions
- `isLoading` / `isFetching`: show loading UI.
- `error`: show error UI, optionally `Alert` and a retry button.
- `refetch`: trigger fetch again if an error occurs.
- Cached data: RTK Query caches responses in `productsApi` slice.

## Interacting with Global State
- Select a post: dispatch `selectionActions.select(id)` in the `Home` screen to set `selectedPostId`.
- Go back: dispatch `selectionActions.unselect()` in `PostDetails` to clear the selection.
- Conditional screen rendering is driven by `selectedPostId` in `src/modules/index.tsx`.

## Extending API & State
- Add a new endpoint in `src/store/api.ts` inside `endpoints`:
  - Example: `builder.query<T, Arg>({ query: (arg) => '/path' })`.
- Use generated hook in your components, e.g., `useGetSomethingQuery(arg)`.
- Add new slices with `createSlice` and combine them in `rootReducer`.

## Troubleshooting
- If bundler cache causes odd behavior:
```bash
npm run start -- --reset-cache
```
- If Android build fails, ensure Android SDK is installed and device/emulator is running.
- For iOS, use macOS with Xcode installed.


- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
