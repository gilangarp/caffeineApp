import { IProfileBody } from "../../redux/types/ProfileType";
import { UseProfileDetail } from "./UseProfileDetail";
import { UseProfileSetting } from "./UseProfileSetting";

export const ProfileDetail = ({ profile }: { profile: IProfileBody }) => {
  const {
    imagePreview,
    onSubmitHandler,
    handleButtonClick,
    fileInputRef,
    onSelectImage,
  } = UseProfileDetail();

  const { isLoading } = UseProfileSetting();
  return (
    <div>
      <main>
        <div className="profile-user flex flex-col h-fit basis-1/5 border-2 rounded-lg p-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex basis-1/4 w-full flex-col gap-1 items-center">
              <h1 className="font-bold text-2xl">{profile.full_name}</h1>
              <h2 className="text-sm text-gray-400">{profile.user_email}</h2>
            </div>
            <div className="w-[113px] h-[113px]">
              {imagePreview ? (
                <img
                  className="h-[113px] w-[113px]"
                  src={imagePreview}
                  alt="Preview"
                />
              ) : (
                <img
                  className="h-[113px] w-[113px]"
                  src={profile.profile_image || ""}
                  alt=""
                />
              )}
            </div>
            <div className="basis-1/4 flex flex-col gap-2">
              <form onSubmit={onSubmitHandler}>
                {!imagePreview && (
                  <div className="bg-primary w-full rounded-lg py-2 text-center">
                    <button onClick={handleButtonClick}>
                      Upload New Photo
                    </button>
                    <input
                      className="hidden"
                      type="file"
                      ref={fileInputRef}
                      onChange={onSelectImage}
                      placeholder="Upload New Photo"
                    />
                  </div>
                )}
                {imagePreview && (
                  <button
                    type="submit"
                    className={`bg-primary w-full font-medium text-base flex items-center justify-center py-2 rounded-lg ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="loader-spinner"></span> Submit...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </button>
                )}
              </form>
              <div className="flex flex-row items-center justify-center gap-2">
                <p className="text-gray-400">Science</p>
                <p>{profile.created_at}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
