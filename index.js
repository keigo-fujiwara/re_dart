const exercisesLite = [
  {
    id: "Q1",
    title: "条件分岐で価格を分類",
    prompt: "price が 1000 以上なら「高額」、500 以上 1000 未満なら「標準」、それ以外は「安価」を出力する if-else if-else 文を完成させてください。",
    hint: "境界を含む(以上/未満)条件を上から順に絞り込むように書くと分かりやすいです。",
  },
  {
    id: "Q2",
    title: "for ループでリストを表示",
    prompt: "リスト items の要素を for ループで順番に表示してください。",
    hint: "length プロパティで要素数を取り、インデックス i を 0 から増やして取り出します。",
    extraCode: "List<String> items = ['Pen', 'Book', 'Eraser', 'Pencil'];",
  },
  {
    id: "Q3",
    title: "挨拶する関数を定義",
    prompt: "引数も返り値もないシンプルな関数 greet を定義し、呼び出して Hello, Dart! を出力してください。",
    hint: "戻り値がないので戻り値型は void、main から関数を呼び出します。",
  },
  {
    id: "Q4",
    title: "足し算を行う関数",
    prompt: "2 つの int 型 a, b を受け取り、合計を返す関数 add を作り、結果を出力してください。",
    hint: "戻り値型は int。main で変数 a, b を用意し、add を呼び出して print します。",
  },
  {
    id: "Q5",
    title: "Monster クラスの基本形",
    prompt: "name (String) と hp (int) を持つシンプルな Monster クラスを作成してください。",
    hint: "プロパティをクラス直下に宣言するだけで OK です。",
  },
  {
    id: "Q6",
    title: "Monster に短縮コンストラクタを追加",
    prompt: "name と hp を必須で受け取る短縮形コンストラクタを追加し、インスタンスを生成して name と hp を print で出力して確認してください。",
    hint: "フィールド名をそのままコンストラクタ引数に書く this. フォームが簡潔です。",
  },
  {
    id: "Q7",
    title: "HP を回復するメソッド",
    prompt: "Monster に hp を指定量回復させ、回復後の hp を返すメソッド heal(int amount) を追加してください。",
    hint: "フィールド hp を更新し、更新後の値を return すれば良いです。",
    extraCode: "(確認方法)\n\nprint(monster1.heal(1000));",
  },
  {
    id: "Q8",
    title: "Monster を継承した Golem を作成",
    prompt: "Monster を継承する Golem クラスを作り、attack と defense プロパティを追加してください。",
    hint: "extends で継承し、追加プロパティには late を付けておくと後で初期化できます。",
  },
  {
    id: "Q9",
    title: "Golem に set メソッドを追加",
    prompt: "Golem に攻撃力・防御力を登録して出力する set(int attack, int defense) を追加してください。",
    hint: "フィールドに代入後、フォーマット文字列で出力します。",
    extraCode: 'print("${this.name}の攻撃力を${this.attack}、防御力を${this.defense}と設定しました");',
  },
  {
    id: "Q10",
    title: "description をオーバーライド",
    prompt: "Monster に description() を追加し、Golem でオーバーライドして全プロパティを出力してください。",
    hint: "親では name と hp を表示。子では @override を付けて追加プロパティも表示します。必要なら super.description() を呼ぶと再利用できます。",
  },
];

function renderCard(ex) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.cardId = ex.id;
  card.id = `card-${ex.id}`;

  card.innerHTML = `
    <div class="card__header">
      <div class="card__title">
        <span class="badge">${ex.id}</span>
        <h2>${ex.title}</h2>
      </div>
    </div>
    <div class="card__body">
      <p class="prompt"></p>
      <pre class="prompt-code ${ex.extraCode ? "" : "is-hidden"}"><code class="prompt-code__code"></code></pre>
    </div>
    <div class="card__actions">
      <button class="btn" data-toggle="hint" data-label-open="ヒントを表示" data-label-close="ヒントを隠す">ヒントを表示</button>
    </div>
    <div class="collapsible hidden" data-section="hint">
      <div class="label">ヒント</div>
      <p class="hint-text"></p>
    </div>
  `;

  card.querySelector(".prompt").textContent = ex.prompt;
  const promptCode = card.querySelector(".prompt-code__code");
  if (promptCode && ex.extraCode) {
    promptCode.textContent = ex.extraCode;
  }
  card.querySelector(".hint-text").textContent = ex.hint;
  card.classList.add("is-hidden");
  return card;
}

function updateButtonLabel(button, isVisible) {
  if (!button) return;
  button.textContent = isVisible ? button.dataset.labelClose : button.dataset.labelOpen;
}

function toggleSection(card, sectionType, forceVisible) {
  const section = card.querySelector(`.collapsible[data-section="${sectionType}"]`);
  const button = card.querySelector(`button[data-toggle="${sectionType}"]`);
  if (!section || !button) return;

  const shouldShow = forceVisible !== undefined ? forceVisible : section.classList.contains("hidden");
  section.classList.toggle("hidden", !shouldShow);
  updateButtonLabel(button, shouldShow);
}

function toggleAll(sectionType, visible) {
  const cards = document.querySelectorAll(".card");
  for (let i = 0; i < cards.length; i++) {
    toggleSection(cards[i], sectionType, visible);
  }
}

function activateCard(targetId) {
  const cards = document.querySelectorAll(".card");
  const tabs = document.querySelectorAll(".tab");

  for (let i = 0; i < cards.length; i++) {
    const isTarget = cards[i].dataset.cardId === targetId;
    cards[i].classList.toggle("is-hidden", !isTarget);
  }

  for (let i = 0; i < tabs.length; i++) {
    const isTarget = tabs[i].dataset.targetId === targetId;
    tabs[i].classList.toggle("tab--active", isTarget);
    tabs[i].setAttribute("aria-selected", isTarget ? "true" : "false");
    tabs[i].setAttribute("tabindex", isTarget ? "0" : "-1");
  }
}

function renderTabs(tabListEl) {
  exercisesLite.forEach((ex, index) => {
    const btn = document.createElement("button");
    btn.className = `tab${index === 0 ? " tab--active" : ""}`;
    btn.dataset.targetId = ex.id;
    btn.type = "button";
    btn.role = "tab";
    btn.setAttribute("aria-controls", `card-${ex.id}`);
    btn.setAttribute("aria-selected", index === 0 ? "true" : "false");
    btn.setAttribute("tabindex", index === 0 ? "0" : "-1");
    btn.textContent = `${ex.id} ${ex.title}`;

    btn.addEventListener("click", () => activateCard(ex.id));
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activateCard(ex.id);
      }
    });

    tabListEl.appendChild(btn);
  });
}

function attachEvents() {
  const list = document.getElementById("exercise-list");
  if (!list) return;

  list.addEventListener("click", (event) => {
    const toggleBtn = event.target.closest("[data-toggle]");
    if (toggleBtn) {
      const card = toggleBtn.closest(".card");
      const sectionType = toggleBtn.dataset.toggle;
      toggleSection(card, sectionType);
      return;
    }
  });

  const expandHints = document.querySelector("[data-action='expand-all-hints']");
  if (expandHints) {
    expandHints.addEventListener("click", () => toggleAll("hint", true));
  }

  const collapseAll = document.querySelector("[data-action='collapse-all']");
  if (collapseAll) {
    collapseAll.addEventListener("click", () => {
      toggleAll("hint", false);
    });
  }

  const scrollTopBtn = document.querySelector(".scroll-top");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      const visible = window.scrollY > 260;
      scrollTopBtn.classList.toggle("visible", visible);
    });
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function init() {
  const list = document.getElementById("exercise-list");
  const tabList = document.getElementById("tab-list");
  if (!list) {
    console.error("#exercise-list が見つかりません");
    return;
  }
  if (!tabList) {
    console.error("#tab-list が見つかりません");
    return;
  }

  exercisesLite.forEach((ex) => {
    list.appendChild(renderCard(ex));
  });
  renderTabs(tabList);
  activateCard(exercisesLite[0].id);
  attachEvents();
}

document.addEventListener("DOMContentLoaded", init);

