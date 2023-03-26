import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import HeaderProfile from './Component/Profile/HeaderProfile';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
function App() {
  return (
    <>
      <div class="padding">
    <div class="col-md-8">
        <div class="card"><HeaderProfile/>
            <div class="card-body little-profile text-center">
                <div class="pro-img"><ProfilePhoto/></div>
                <h3 class="m-b-0"><FullName/></h3>
                <p><Address/></p>
            </div>
        </div>
    </div>
</div>

    </>
  );
}

export default App;
