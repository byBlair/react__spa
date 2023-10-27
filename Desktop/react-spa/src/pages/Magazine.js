import './css/magazin.css';
export default function Magazine(){
    return(
        <div className="magazine">
            <dl>
                <dt>매거진</dt>
                <dd>Magazines</dd>
            </dl>
            <div>
            <figure>
                <img src="./img/sul1.png" />
                <figcaption>
                    <dl>
                        <dt>Vol98 Spring 2021</dt>
                        <dd><a href="/pdf/sulwhasoo_2021_vol.98 (1).pdf" download="/pdf/sulwhasoo_2021_vol.98 (1).pdf">PDF 다운로드</a></dd>
                    </dl>
                </figcaption>
            </figure>
            <figure>
                <img src="./img/sul2.png" />
                <figcaption>
                    <dl>
                        <dt>vol97 Summer 2021</dt>
                        <dd><a href="/pdf/sulwhasoo_2021_vol.97.pdf" download="/pdf/sulwhasoo_2021_vol.97.pdf">PDF 다운로드</a></dd>
                    </dl>
                </figcaption>
            </figure>
            <figure>
                <img src="./img/sul7.png" />
                <figcaption>
                    <dl>
                        <dt>vol96 Spring 2020</dt>
                        <dd><a href="/pdf/sulwhasoo_2021_vol.96.pdf" download="/pdf/sulwhasoo_2021_vol.96.pdf">PDF 다운로드</a></dd>
                    </dl>
                </figcaption>
            </figure>
            <figure>
                <img src="./img/sul8.png" />
                <figcaption>
                    <dl>
                        <dt>vol95 Spring 2020</dt>
                        <dd><a href="/pdf/sulwhasoo_2020_spring_vol.95.pdf" download="/pdf/sulwhasoo_2020_spring_vol.95.pdf">PDF 다운로드</a></dd>
                    </dl>
                </figcaption>
            </figure>
            <figure>
                <img src="./img/sul3.png" />
                <figcaption>
                    <dl>
                        <dt>Hyang Jang 2023</dt>
                        <dd><a href="/pdf/hyangjang_2023_08.pdf" download="/pdf/hyangjang_2023_08.pdf">PDF 다운로드</a></dd>
                    </dl>
                </figcaption>
            </figure>
            <figure>
                <img src="./img/sul4.png" />
                <figcaption>
                    <dl>
                        <dt>Hyang Jang 2023</dt>
                        <dd><a href="/pdf/hyangjang_2023_06.pdf" download="/pdf/hyangjang_2023_06.pdf">PDF 다운로드</a></dd>
                    </dl>
                </figcaption>
            </figure>
            <figure>
                <img src="./img/sul5.png" />
                <figcaption>
                    <dl>
                        <dt>Hyang Jang 2020</dt>
                        <dd><a href="/pdf/hyangjang_202111.pdf" download="/pdf/hyangjang_202111.pdf">PDF 다운로드</a></dd>
                    </dl>
                </figcaption>
            </figure>
            <figure>
                <img src="./img/sul6.png" />
                <figcaption>
                    <dl>
                        <dt>Hyang Jang 2019</dt>
                        <dd><a href="/pdf/hyangjang_202106.pdf" download="/pdf/hyangjang_202106.pdf">PDF 다운로드</a></dd>
                    </dl>
                </figcaption>
            </figure>
            </div>
            <p><button type="button">전체 매거진 보기</button></p>
        </div>
    )
}