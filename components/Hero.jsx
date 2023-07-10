import React from "react";
import Animtext from "./elements/Animtext";
import Link from "next/link";




function Hero() {
  return (
    <div>
      <div className=" w-full h-full bg-black ">
        <div className="background">
          <div className="w-full h-full flex items-center flex-col  justify-center text-white">
            <h1 className="lg:text-[3.375rem] pt-8 text-[2.375rem]  md:text-[2.875rem] font-[700] font-Inter text-center leading-[59px] animate__animated animate__fadeInUp ">
              Radically different <Animtext title="remote job search" /> where
              companies apply to you
            </h1>
            <div className="w-full h-fit flex md:pt-[59px] pt-[26px]  justify-center items-center animate__animated animate__fadeInUp animate__slow">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
                <Link
                  href="#"
                  className="py-[15px] px-[2rem] bg-white text-black font-Inter font-[700] rounded-[5px]"
                >
                  Find remote jobs
                </Link>
                <Link
                  href="#"
                  className="py-[15px] px-[2rem] bg-transparent text-white border border-white font-Inter font-[700] rounded-[5px]"
                >
                  Hire developers
                </Link>
              </div>
            </div>
          </div>
          
        </div>
        <div className="md:pt-[1.875rem] pt-[5rem] pb-[4.125rem] flex justify-center">
            <div className="grid md:grid-cols-6 md:w-[80%] h-full gap-12 md:gap-0 grid-cols-3 w-[90%]">
                <div className="md:w-[93px] md:h-[24px] w-[90px] h-[14px] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 36"><path fill="currentColor" fill-rule="evenodd" d="M28.56 15.909c-5.784-3.436-15.326-3.751-20.848-2.076a1.678 1.678 0 1 1-.974-3.212c6.339-1.924 16.876-1.552 23.535 2.4a1.678 1.678 0 0 1-1.713 2.888zm-.19 5.088a1.4 1.4 0 0 1-1.924.46c-4.822-2.964-12.176-3.823-17.881-2.09a1.401 1.401 0 0 1-1.746-.933 1.4 1.4 0 0 1 .933-1.745c6.517-1.978 14.62-1.02 20.158 2.384a1.4 1.4 0 0 1 .46 1.924zm-2.195 4.886a1.118 1.118 0 0 1-1.538.372c-4.214-2.575-9.518-3.157-15.765-1.73a1.118 1.118 0 1 1-.498-2.18c6.836-1.563 12.7-.89 17.43 2 .527.322.693 1.01.37 1.538zM17.945 0C27.856 0 35.89 8.034 35.89 17.945S27.856 35.89 17.945 35.89C8.035 35.89 0 27.856 0 17.945S8.034 0 17.945 0zm83.773 8.994c1.053 0 1.756.168 2.306.33a.205.205 0 0 1 .136.144l.007.052v2.337a.202.202 0 0 1-.267.194c-.52-.174-.985-.289-1.563-.289-.919 0-1.355.452-1.399 1.458l-.003.173v.383h4.74c.067 0 .128.034.166.087l.023.044 3.24 8.457 2.959-8.451a.204.204 0 0 1 .142-.13l.05-.007h2.888a.203.203 0 0 1 .2.23l-.011.047-4.814 12.437c-.998 2.568-2.13 3.522-4.179 3.522-1.095 0-1.981-.227-2.963-.759a.201.201 0 0 1-.104-.202l.017-.06.94-2.063a.205.205 0 0 1 .12-.11.208.208 0 0 1 .162.015c.526.288 1.041.434 1.53.434.567 0 .991-.174 1.413-1.02l.085-.178-3.968-9.514h-2.59v9.517a.204.204 0 0 1-.15.195l-.054.008h-2.774a.202.202 0 0 1-.195-.15l-.007-.053v-9.517h-1.333a.204.204 0 0 1-.196-.15l-.008-.053v-2.397c0-.093.064-.172.15-.196l.054-.007h1.333v-.587c0-2.728 1.354-4.171 3.917-4.171zM62.292 13.51c2.904 0 5.843 2.236 5.843 6.51 0 4.272-2.94 6.507-5.843 6.507-1.47 0-2.692-.513-3.712-1.563l-.189-.203v4.978a.204.204 0 0 1-.149.197l-.054.007h-2.774a.203.203 0 0 1-.195-.15l-.007-.054V13.968c0-.094.063-.173.148-.197l.054-.007h2.774c.094 0 .172.064.196.15l.007.054v1.419c1.057-1.261 2.339-1.877 3.901-1.877zm13.377 0c3.726 0 6.645 2.86 6.645 6.51 0 3.662-2.939 6.531-6.691 6.531-3.713 0-6.623-2.849-6.623-6.485 0-3.676 2.93-6.556 6.669-6.556zm-28.04-3.92c2.275 0 4.222.675 5.95 2.062a.203.203 0 0 1 .067.22l-.028.056-1.513 2.133a.2.2 0 0 1-.134.083.202.202 0 0 1-.153-.038c-1.453-1.083-2.838-1.609-4.235-1.609-1.442 0-2.41.693-2.41 1.722 0 1.09.55 1.608 3.65 2.347 3.774.918 5.314 2.343 5.314 4.92 0 3.048-2.33 5.018-5.935 5.018-2.548 0-4.91-.905-6.83-2.62a.201.201 0 0 1-.053-.226l.033-.055 1.697-2.018a.201.201 0 0 1 .139-.072.214.214 0 0 1 .149.048c1.65 1.43 3.125 2.039 4.934 2.039 1.628 0 2.64-.705 2.64-1.838 0-1.023-.5-1.595-3.465-2.278-3.484-.842-5.5-1.933-5.5-5.013 0-2.873 2.337-4.88 5.683-4.88zm39.414.85c.093 0 .172.063.195.149l.007.054v3.121h3.053c.094 0 .172.064.195.15l.008.054v2.384a.203.203 0 0 1-.149.196l-.054.007h-3.053v5.735c0 .906.398 1.31 1.288 1.31.577 0 1.094-.124 1.628-.393a.203.203 0 0 1 .287.13l.007.052v2.27c0 .073-.04.141-.103.176-.778.442-1.603.647-2.598.647-2.369 0-3.607-1.184-3.685-3.52l-.004-.237v-6.17h-1.334a.202.202 0 0 1-.194-.15l-.008-.053v-2.384c0-.094.063-.173.149-.197l.053-.007h1.334v-3.121c0-.093.064-.172.15-.196l.054-.007h2.774zm7.725 3.324c.094 0 .173.064.196.15l.008.054v12.104a.204.204 0 0 1-.15.195l-.054.008h-2.774a.203.203 0 0 1-.196-.15l-.007-.053V13.968c0-.094.063-.173.15-.197l.053-.007h2.774zm-19.145 2.584c-1.995 0-3.442 1.544-3.442 3.671 0 2.12 1.499 3.717 3.488 3.717 2.008 0 3.465-1.543 3.465-3.67 0-2.12-1.51-3.718-3.511-3.718zm-13.973-.022c-1.897 0-3.328 1.587-3.328 3.693 0 2.107 1.431 3.694 3.328 3.694 1.92 0 3.26-1.518 3.26-3.694 0-2.14-1.372-3.693-3.26-3.693zm56.06-2.585c1.098 0 1.953.881 1.953 1.951s-.865 1.964-1.963 1.964a1.945 1.945 0 0 1-1.952-1.953c0-1.07.865-1.962 1.962-1.962zm0 .194c-1 0-1.757.795-1.757 1.768s.752 1.758 1.747 1.758c1 0 1.757-.795 1.757-1.769 0-.973-.751-1.757-1.747-1.757zm.12.682c.475 0 .789.243.789.653 0 .336-.194.542-.476.623l.552.773h-.465l-.497-.709h-.428v.71h-.39v-2.05h.915zm-.016.351h-.509v.648h.509c.253 0 .405-.124.405-.324 0-.21-.152-.324-.405-.324zM93.395 8.253a1.99 1.99 0 1 1 0 3.98 1.99 1.99 0 1 1 0-3.98z"/></svg>
                </div>
                <div className="lg:w-[93px] lg:h-[24px] w-[90px] h-[14px] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 36"><path fill="currentColor" fill-rule="nonzero" d="M.015 6.712h4.324v9.618h9.119V6.712h4.33v23.61h-4.33v-9.82h-9.12v9.82H.016V6.712zm31.47 15.92V12.467h4.099v10.165c0 4.24-3.446 7.69-7.681 7.69-4.236 0-7.682-3.45-7.682-7.69V12.467h4.1v10.165a3.588 3.588 0 0 0 3.582 3.584 3.588 3.588 0 0 0 3.582-3.584zM47.03 12.586c4.592 0 8.541 3.843 8.541 8.868 0 5.09-4.282 8.868-9.17 8.868-4.397 0-8.31-3.712-8.31-9.131V6.712h4.114v7.813c1.37-1.348 2.79-1.939 4.825-1.939zm.102 13.925c2.362 0 4.495-2.33 4.495-5.057 0-2.727-2.133-5.058-4.495-5.058-2.788 0-4.92 2.331-4.92 5.058 0 2.726 2.132 5.057 4.92 5.057zm15.349-12.887c0 3.842 9.808 1.083 9.808 9.95 0 4.106-3.412 6.734-7.643 6.734-2.821 0-5.182-1.183-7.086-3.515l2.986-3.087c1.114 1.248 1.902 2.43 4.33 2.43 1.541 0 2.886-1.216 2.886-2.594 0-4.467-9.809-1.938-9.809-9.918 0-4.303 3.215-6.898 7.677-6.898 2.23 0 4.952 1.248 6.296 3.055l-2.689 3.152c-1.049-1.117-2.656-2.036-3.87-2.036-1.508 0-2.886.656-2.886 2.727zm20.638-1.27c4.887 0 9.17 3.777 9.17 8.868 0 5.025-3.95 8.868-8.542 8.868-2.035 0-3.454-.592-4.825-1.939v7.85h-4.114V21.484c0-5.421 3.914-9.13 8.31-9.13zm.73 13.926c2.362 0 4.495-2.334 4.495-5.058 0-2.727-2.133-5.058-4.494-5.058-2.788 0-4.92 2.331-4.92 5.058 0 2.724 2.132 5.058 4.92 5.058zm38.72.231c.461 0 .986-.033 1.445-.064l-1.017 3.743c-.394.098-1.117.132-1.641.132-3.509 0-6.066-1.873-6.066-5.584V10.22l4.164-1.872v4.763h3.772v3.612h-3.772v7.127c0 1.61.69 2.66 3.115 2.66zm-10.848-9.577c.775 1.349 1.144 2.82 1.144 4.416v.081c0 1.622-.459 3.096-1.291 4.43a8.786 8.786 0 0 1-3.326 3.135 8.758 8.758 0 0 1-4.243 1.074h-.248a9.28 9.28 0 0 1-3.718-.782 9.185 9.185 0 0 1-1.59-.87l-3.575 3.58a2.817 2.817 0 0 1-.692 2.828 2.786 2.786 0 0 1-1.984.823 2.784 2.784 0 0 1-1.983-.823 2.791 2.791 0 0 1-.822-1.985 2.79 2.79 0 0 1 .82-1.986 2.783 2.783 0 0 1 2.947-.647l3.46-3.472a8.255 8.255 0 0 1-1.35-2.35 9.127 9.127 0 0 1-.57-3.143v-.33c0-1.582.508-3.032 1.34-4.35a8.747 8.747 0 0 1 1.475-1.729l-10.424-7.52-.758-.576c-.546.33-1.179.53-1.863.53a3.631 3.631 0 0 1-3.629-3.634A3.63 3.63 0 0 1 84.47 0a3.63 3.63 0 0 1 3.628 3.634c0 .335-.066.652-.15.96 3.594 2.73 9.738 7.405 11.612 8.83a9.477 9.477 0 0 1 2.891-.908V8.198c-1.21-.515-1.92-1.654-1.92-2.984a3.287 3.287 0 0 1 3.287-3.28 3.265 3.265 0 0 1 3.26 3.28c0 1.33-.752 2.47-1.963 2.984v4.317a8.813 8.813 0 0 1 3.322 1.152c1.387.82 2.496 1.909 3.285 3.267zm-4.369 7.511c.845-.93 1.268-1.955 1.268-3.062 0-.166-.007-.34-.02-.51a5.117 5.117 0 0 0-.792-2.257 4.761 4.761 0 0 0-1.764-1.608c-.707-.362-1.456-.518-2.247-.518h-.08c-.873 0-1.657.237-2.39.722a4.957 4.957 0 0 0-1.724 1.888c-.39.722-.544 1.485-.544 2.29v.25c0 .819.272 1.591.771 2.299.484.72 1.075 1.29 1.853 1.69.69.362 1.394.561 2.114.561h.208c1.261 0 2.377-.665 3.347-1.745z"/></svg>
                </div>
                <div className="lg:w-[93px] lg:h-[24px] w-[90px] h-[14px] text-white flex items-center">
                <svg width="132" height="15" viewBox="0 0 132 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.546.285l4.957 11.842h.306L13.766.285h3.122l-6.07 14.43H6.407L.336.285h3.21zm19.195 2.61v3.311h9.018v2.61h-9.018v3.311h11.53v2.61H19.793V.307H34.27v2.61H22.74v-.022zM38.245.285H47.7c2.664 0 4.433 1.733 4.433 4.32 0 2.325-1.528 3.926-3.865 4.167.218.22.415.482.524.68l3.341 5.263h-3.34l-3.757-5.921h-3.843v5.92h-2.97c.022 0 .022-14.429.022-14.429zM47.7 6.206c.874 0 1.485-.57 1.485-1.447V4.32c0-.877-.59-1.447-1.485-1.447h-6.507v3.311H47.7v.022zm8.8 8.509V.285h2.97v14.43H56.5zm17.885-4.408c0-1.162-1.288-1.645-4.258-1.645-4.673 0-6.682-1.206-6.682-4.123C63.445 1.601 65.803 0 70.236 0c4.084 0 6.791 1.842 6.791 4.605h-2.97c0-1.206-1.528-2.017-3.843-2.017-2.511 0-3.843.658-3.843 1.93 0 1.096 1.18 1.535 3.974 1.535 4.892 0 6.944 1.293 6.944 4.254 0 3.048-2.467 4.693-7.097 4.693-4.258 0-7.097-1.842-7.097-4.605h2.97c0 1.206 1.66 2.017 4.15 2.017 2.729 0 4.17-.745 4.17-2.105zm9.608-4.1h8.866V.284h2.97v14.43h-2.97V8.794h-8.866v5.92h-2.97V.286h2.97v5.921zM114.26 7.5c0 4.32-3.253 7.5-7.686 7.5s-7.687-3.18-7.687-7.5S102.14 0 106.573 0s7.686 3.18 7.686 7.5zm-3.1 0c0-2.741-1.922-4.759-4.586-4.759-2.664 0-4.586 2.018-4.586 4.759 0 2.741 1.922 4.759 4.586 4.759 2.664 0 4.586-2.018 4.586-4.759zm9.258 7.215h-2.969V.285h9.455c2.664 0 4.433 1.733 4.433 4.32 0 2.478-1.769 4.189-4.433 4.189h-6.507v5.92h.021zm0-8.509h6.508c.873 0 1.485-.57 1.485-1.447V4.32c0-.877-.59-1.447-1.485-1.447h-6.508v3.333z" fill="#666"></path></svg>
                </div>
                <div className="lg:w-[53px] lg:h-[14px] w-[90px] h-[14px] text-white ">
                 <svg xmlns="http://www.w3.org/2000/svg"  fill="white" height="26" viewBox="0 0 105 36"><path d="M35.701 35.677H16.527c-.61 0-.823-.154-.874-.624-.043-.401.1-.73.512-.779 1.413-.169 1.796-1.102 1.814-2.337.005-.332.038-.664.038-.996.003-3.692.018-7.384-.01-11.076a10.766 10.766 0 0 0-.266-2.4c-.506-2.123-2.073-2.869-4.06-2.519-2.063.364-3.382 1.934-3.657 4.232a13.853 13.853 0 0 0-.097 1.61c-.009 3.676-.005 7.352-.004 11.029 0 .205.013.411.013.617.001.79.418 1.266 1.142 1.505.33.108.667.2 1.002.292.322.089.546.258.535.623-.011.37-.178.647-.545.745a2.588 2.588 0 0 1-.659.074c-3.505.003-7.01.003-10.515 0-.683 0-.874-.167-.89-.698-.01-.342.157-.531.453-.64.207-.076.42-.14.627-.217.82-.302 1.24-.89 1.269-1.763.016-.507.056-1.013.056-1.52.004-7.02.006-14.039-.002-21.058a66.802 66.802 0 0 0-.086-3.371c-.048-.942-.234-1.135-1.13-1.387a7.6 7.6 0 0 0-.507-.125C.242 4.801.006 4.57 0 4.08c-.005-.491.324-.574.67-.642C3.375 2.905 5.945 2 8.357.66c.304-.17.595-.362.897-.535.426-.245.65-.128.695.364.017.189.009.38.008.57-.012 4.389-.027 8.777-.028 13.166 0 .263.115.525.177.788.225-.129.478-.225.67-.391 2.43-2.105 5.19-3.313 8.466-3.111a7.654 7.654 0 0 1 3.79 1.247c1.834 1.201 2.499 2.987 2.588 5.069.025.585.036 1.172.037 1.758.003 4.12 0 8.24.002 12.359 0 1.24.553 1.966 1.755 2.246.91.212 1.826.227 2.711-.128.737-.296 1.17-.842 1.253-1.644.02-.188.03-.379.03-.568.002-4.627.001-9.254 0-13.881 0-.857-.154-1.066-.987-1.317a14.236 14.236 0 0 0-.915-.245c-.433-.1-.562-.38-.576-.8-.015-.44.26-.528.585-.597 2.125-.451 4.206-1.048 6.168-1.994a36.753 36.753 0 0 0 2.34-1.26c.611-.351.908-.238.913.458.015 1.996-.002 3.992-.007 5.989 0 .174-.014.348-.014.522-.002 4.135-.003 8.27 0 12.405 0 .364-.001.733.057 1.09.168 1.019.832 1.622 1.781 1.895a5.532 5.532 0 0 0 3.052.023c1.151-.32 1.805-1.17 1.807-2.37a6377.8 6377.8 0 0 0 0-13.358c0-.237-.035-.474-.057-.71-.048-.515-.326-.86-.817-.993a17.086 17.086 0 0 0-1.437-.305c-.675-.122-.845-.261-.853-.744-.009-.491.147-.627.826-.762 2.76-.547 5.423-1.376 7.904-2.73.32-.174.623-.378.946-.544.504-.26.712-.141.724.417.014.697-.01 1.394.013 2.09.009.251.11.498.168.747.244-.119.529-.191.726-.364 1.042-.911 2.122-1.774 3.407-2.31 2.49-1.038 4.984-1.128 7.423.172 1.006.536 1.666 1.443 2.34 2.327.437.57.556.591 1.088.082 1.463-1.402 3.099-2.517 5.083-3.023 2.733-.698 5.358-.494 7.719 1.182 1.229.873 1.87 2.147 1.99 3.634.128 1.576.211 3.16.225 4.74.032 3.582.011 7.163.01 10.744 0 1.17.333 1.617 1.466 1.947.152.044.307.078.456.13.465.16.63.45.573.953-.054.48-.39.566-.78.584-.174.008-.35.001-.524.001H74.146c-.709-.001-1.024-.217-1.083-.732-.039-.334.061-.595.4-.72.118-.043.238-.084.359-.12 1.219-.366 1.594-.79 1.605-2.066.026-2.882.014-5.765 0-8.647a238.124 238.124 0 0 0-.08-5.035c-.067-2.566-2.348-3.647-4.281-3.238-1.502.318-2.65 1.115-3.042 2.712a1.767 1.767 0 0 0-.052.422c.01 4.546.021 9.092.036 13.638 0 .221.035.442.046.663.033.626.355 1.037.938 1.24.373.129.753.237 1.133.346.395.113.565.364.535.775-.03.408-.236.642-.635.704-.203.03-.41.056-.614.056-3.442.003-6.883.004-10.325 0-.72 0-.983-.23-.986-.793-.002-.336.146-.55.457-.633 1.843-.497 1.936-1.21 1.934-2.821-.004-3.375-.027-6.749-.06-10.123a63.32 63.32 0 0 0-.124-3.037c-.14-2.4-2.01-3.728-4.354-3.129-1.49.382-2.972 1.558-2.927 3.737.075 3.643.029 7.288.042 10.932.003.776.047 1.551.066 2.327.022.905.478 1.48 1.327 1.757.361.118.726.225 1.092.323.376.101.498.369.478.717-.02.346-.17.617-.543.681-.233.04-.472.062-.708.062-6.36.003-12.72.003-19.079.003v.002zm62.304-24.143c1.72.053 3.62.26 5.274 1.395 1.031.708 1.694 1.658 1.72 2.955.026 1.28-.64 2.067-1.913 2.22a6.12 6.12 0 0 1-1.421-.014c-.85-.098-1.484-.557-1.832-1.337a16.004 16.004 0 0 1-.675-1.818c-.41-1.33-.942-1.744-2.341-1.723-.95.015-1.832.249-2.483.992-.881 1.005-.878 2.644.162 3.572 1.103.985 2.35 1.811 3.554 2.68 1.267.916 2.626 1.719 3.82 2.719 1.433 1.199 2.299 2.776 2.351 4.701.061 2.261-.95 4.033-2.633 5.44-2.373 1.985-5.185 2.711-8.219 2.683-1.897-.017-3.766-.25-5.48-1.151-1.053-.553-1.899-1.316-2.283-2.489-.68-2.076.523-3.684 2.704-3.614 1.66.054 2.31.51 2.89 2.094.218.593.396 1.203.552 1.815.238.936.817 1.52 1.773 1.59.716.052 1.473.065 2.16-.108 2.282-.572 3.048-3.158 1.4-4.837-.89-.906-1.944-1.668-2.994-2.395-1.508-1.045-3.13-1.93-4.424-3.262-1.744-1.794-2.462-3.893-1.753-6.348.55-1.904 1.893-3.188 3.557-4.152 1.948-1.13 4.072-1.622 6.534-1.608zM30.79 5.999c-.003-2.25 1.821-4.089 4.064-4.095 2.242-.007 4.128 1.847 4.117 4.05-.011 2.298-1.805 4.126-4.073 4.149-2.252.022-4.104-1.828-4.108-4.104z"></path></svg>
                </div>
                <div className="lg:w-[93px] lg:h-[24px] w-[90px] h-[14px] text-white">
                  <svg viewBox="0 0 95 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.326 15.705c-.061.486-.076.984-.194 1.455-.275 1.093-.794 2.065-1.597 2.869-2.442 2.448-4.881 4.9-7.336 7.337-.957.95-2.147 1.305-3.46 1.101-1.53-.239-2.608-1.13-3.2-2.559-.31-.744-.357-1.533-.191-2.335.183-.89.638-1.604 1.274-2.238 2.429-2.417 4.845-4.849 7.267-7.275.247-.247.493-.493.736-.742.427-.438.662-.957.63-1.577-.029-.54-.254-.995-.634-1.377-.1-.1-.201-.199-.291-.308-.153-.188-.109-.36.116-.44.105-.038.22-.054.333-.063a5.7 5.7 0 0 1 2.046.227 6.03 6.03 0 0 1 3.362 2.396c.402.573.693 1.196.88 1.876.15.542.227 1.087.26 1.653zM0 12.075c.066-.495.09-1.001.208-1.484.208-.855.573-1.654 1.155-2.32.544-.622 1.134-1.205 1.717-1.792 1.718-1.73 3.445-3.451 5.165-5.18C9.14.4 10.212-.078 11.478.01c1.59.113 2.762.899 3.477 2.342.27.542.41 1.12.407 1.717-.007 1.116-.377 2.107-1.171 2.908-1.616 1.632-3.24 3.253-4.864 4.878-.867.87-1.73 1.744-2.605 2.607-.531.524-.737 1.148-.628 1.877.048.32.19.611.396.86.15.181.321.343.477.52.194.219.131.422-.154.503a.985.985 0 0 1-.223.031c-1.698.08-3.204-.41-4.488-1.535a6.032 6.032 0 0 1-1.593-2.216A6.637 6.637 0 0 1 0 12.075zM43.538 20.041c-.007.1-.02.199-.02.295l-.001 6.083c0 .404 0 .404-.41.404h-2.64c-.102 0-.203-.01-.297-.014-.066-.242-.073-18.304-.007-18.59.082-.008.173-.023.265-.023.927 0 1.853-.002 2.78 0 .277 0 .307.035.307.312.002.246-.002.493 0 .739 0 .051.017.102.033.189l.146-.12c.852-.758 1.83-1.244 2.965-1.426a6.197 6.197 0 0 1 2.366.065c1.482.335 2.675 1.134 3.585 2.353.522.7.885 1.482 1.116 2.32.265.957.336 1.941.232 2.925-.137 1.3-.554 2.508-1.341 3.571-.804 1.087-1.842 1.845-3.139 2.241a6.05 6.05 0 0 1-2.885.186c-1.13-.204-2.128-.691-2.965-1.49-.01-.01-.032-.007-.09-.02zm-.003-5.315c0 .18-.014.361.003.54.018.176.065.35.104.523.171.77.567 1.41 1.165 1.916.7.594 1.518.84 2.436.816 1.835-.048 3.11-1.428 3.331-3.097.053-.4.07-.804.027-1.214a3.918 3.918 0 0 0-.292-1.174c-.503-1.136-1.355-1.86-2.6-2.067-1.21-.2-2.272.123-3.136.991-.751.757-1.083 1.699-1.038 2.766zM84.58 15.754c.07.254.105.446.174.626.36.933.954 1.656 1.888 2.06.705.305 1.443.346 2.197.251 1.133-.14 1.994-.743 2.719-1.585.018-.022.04-.041.057-.062.174-.193.2-.198.38-.026.343.325.68.654 1.018.981l.668.648c.18.172.18.178.03.362-.716.872-1.555 1.585-2.597 2.04-.451.197-.918.341-1.403.433a8.308 8.308 0 0 1-1.776.157c-2.09-.058-3.826-.85-5.121-2.52a6.433 6.433 0 0 1-1.05-2.037c-.206-.653-.347-1.312-.338-1.999.006-.433 0-.868.023-1.302.026-.481.17-.941.308-1.402a6.26 6.26 0 0 1 1.282-2.318 6.23 6.23 0 0 1 2.593-1.802 6.805 6.805 0 0 1 2.585-.426c1.635.048 3.088.574 4.272 1.738a6.076 6.076 0 0 1 1.465 2.31c.305.846.432 1.715.425 2.61-.002.34.004.681 0 1.023-.002.202-.03.23-.226.24-.056.004-.113 0-.17 0h-9.402zm6.627-2.61c.007-.017.018-.035.018-.053a.62.62 0 0 0-.01-.112 2.602 2.602 0 0 0-.885-1.525c-.957-.804-2.061-.931-3.225-.629-1.002.26-1.723.898-2.186 1.82-.078.157-.219.309-.165.511.312.072 6.245.058 6.453-.012zM29.556 16.818l.14.198a4.067 4.067 0 0 0 2.089 1.56c.805.263 1.63.326 2.45.039.366-.127.676-.329.842-.702.144-.323.111-.838-.242-1.1a3.107 3.107 0 0 0-.964-.465c-.649-.202-1.305-.377-1.954-.575-.916-.279-1.797-.63-2.554-1.237-.562-.45-.959-1.026-1.112-1.721-.106-.48-.154-.971-.075-1.487.24-1.552 1.166-2.495 2.546-3.082.954-.406 1.957-.505 2.973-.41 1.461.137 2.723.72 3.734 1.806.045.047.088.097.13.148.149.18.153.22-.004.377-.568.565-1.138 1.126-1.71 1.686-.137.133-.154.13-.289-.011-.32-.335-.65-.654-1.069-.87-.805-.415-1.636-.5-2.49-.185-.267.097-.497.258-.631.533-.144.296-.118.59.093.836.185.216.433.339.69.425.501.169 1.007.324 1.514.467 1.037.292 2.068.594 2.991 1.175.602.379 1.086.862 1.377 1.524.152.34.239.7.27 1.064.123 1.422-.303 2.642-1.394 3.59-.51.444-1.108.747-1.756.945a7.057 7.057 0 0 1-3.169.212c-1.475-.225-2.78-.812-3.833-1.897-.189-.195-.35-.417-.515-.633-.127-.168-.123-.176.023-.324.511-.514 1.024-1.026 1.538-1.538l.36-.348zM80.519 10.495l-2.07 2.105c-.165-.161-.335-.32-.495-.487-.678-.709-1.51-1.069-2.485-1.129-.794-.049-1.548.072-2.232.49-.698.424-1.166 1.035-1.453 1.807-.257.688-.284 1.398-.192 2.098.192 1.46 1.16 2.727 2.784 3.023 1.524.277 2.817-.152 3.856-1.315.061-.07.127-.136.185-.197.216.093 1.242 1.086 2.105 2.025-.025.043-.046.097-.08.138-.645.762-1.376 1.42-2.276 1.87a6.614 6.614 0 0 1-1.71.573 7.66 7.66 0 0 1-2.652.063c-1.248-.192-2.368-.682-3.332-1.514a6.424 6.424 0 0 1-1.822-2.634 7.157 7.157 0 0 1-.402-1.67 8.416 8.416 0 0 1-.064-1.328 7.555 7.555 0 0 1 .291-1.808 6.633 6.633 0 0 1 1.17-2.318c.892-1.137 2.048-1.874 3.44-2.246.832-.223 1.679-.275 2.532-.209 1.65.128 3.083.75 4.243 1.955.226.234.445.478.659.708zM59.634 21.231h-3.339c-.067-.233-.073-17.89-.004-18.162h3.32c.06.209.083 17.706.023 18.162zM62.51 14.716V8.552l-.001-.171c-.001-.104.061-.157.151-.176.064-.013.132-.008.198-.01h2.78c.32 0 .345.024.345.336v12.387c0 .318-.017.335-.341.335h-2.808c-.057 0-.114.002-.17-.005-.096-.012-.156-.065-.156-.168v-.2l.002-6.164zM62.164 4.595c.002-1.144.91-2.097 2.075-2.087a2.098 2.098 0 0 1 2.098 2.074c.013 1.178-.993 2.096-2.103 2.103-1.086.008-2.072-.897-2.07-2.09z" fill="currentColor"/></svg>
                </div>
                <div className="lg:w-[93px] lg:h-[24px] w-[90px] h-[14px] text-white">
                <svg viewBox="0 0 175 45" height="20"  fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.56 9.513v8.956h17.615v8.562H10.56v16.354H0V.781h29.79v8.732H10.56zM61.003 34.656v8.732h-27.73V.78H43.83v33.875h17.173zM99.644 22.084c0 14.017-7.782 22.25-19.23 22.25-11.447 0-19.227-8.068-19.227-22.25C61.188 8.067 68.97 0 80.416 0c11.444 0 19.23 8.067 19.23 22.084zm-11.17-.056c0-9.346-3.166-12.793-8.06-12.793-4.831 0-8.057 3.447-8.057 12.793 0 9.456 3.223 12.792 8.058 12.792 4.89 0 8.06-3.334 8.06-12.793zM137.461.78l-15.448 27.035v15.573h-10.559V27.815L96.006.78h11.669l9.223 17.52h.556l9.113-17.52h10.894zM175 22.027c0 12.793-7.002 21.36-19.505 21.36H139.1V.782h16.171C167.998.78 175 9.29 175 22.028zm-10.892 0c0-9.186-3.779-12.014-10.67-12.014h-3.779v24.14h3.779c6.891.003 10.67-2.777 10.67-12.125z" fill="currentColor"/></svg>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Hero;
