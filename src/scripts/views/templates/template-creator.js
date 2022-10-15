const createLikeButtonTemplate = () => `<button aria-label="like this restaurant" id="likeButton" class="like">
<i class="fa fa-heart-o" aria-hidden="true"></i>
</button>`;
const createLikedButtonTemplate = () => `<button aria-label="unlike this restaurant" id="likeButton" class="like">
<i class="fa fa-heart" aria-hidden="true"></i>
</button>`;
const createInputReviewTemplate = {
  templateReview: () => `<h3>Add New Review</h3>
    <form id="form-review-customers">
    <label for="name">Your name
    <input type="text" name="name" class="form-control input-review" id="name" />
    </label>
    <label for="comment">Comment
    <textarea name="comment" class="form-control input-review" cols="50" rows="3" id="comment"></textarea>
    </label>
    <button class="btn btn-primary" type="submit" id="send-review">Submit</button>
    </form>`,
};

export { createLikedButtonTemplate, createLikeButtonTemplate, createInputReviewTemplate };
